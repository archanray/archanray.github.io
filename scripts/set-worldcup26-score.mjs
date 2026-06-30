import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const usage = `
Usage:
  npm run score -- group <MATCH_ID> <GA> <GB>
  npm run score -- knockout <MATCH_ID> <A_GOALS> <B_GOALS> [WINNER_CODE]
  npm run score -- knockout <MATCH_ID> <A_GOALS> <B_GOALS> <WINNER_CODE> <A_PENS> <B_PENS>

Examples:
  npm run score -- group A1 2 1
  npm run score -- knockout 104 1 1 ARG
  npm run score -- knockout 74 1 1 PAR 3 4

Notes:
  - Use team code as WINNER_CODE for tied knockout matches decided by penalties/extra time.
  - Penalties are stored as pa/pb, e.g. { a: 1, b: 1, pa: 3, pb: 4, winner: "PAR" }.
  - This rewrites assets/data/worldcup26-data.js. Review git diff before committing.
`;

const [kind, matchId, leftScore, rightScore, winner, leftPens, rightPens] =
  process.argv.slice(2);

if (!kind || !matchId || leftScore === undefined || rightScore === undefined) {
  console.error(usage);
  process.exit(1);
}

function parseScore(x, label = "score") {
  if (!/^\d+$/.test(String(x))) throw new Error(`Invalid ${label}: ${x}`);
  return Number(x);
}

const ga = parseScore(leftScore, "score");
const gb = parseScore(rightScore, "score");

const file = "assets/data/worldcup26-data.js";
const text = readFileSync(file, "utf8");

const sandbox = { window: {} };
vm.runInNewContext(text, sandbox, { filename: file });

const state = sandbox.window.WORLD_CUP_STATE;
if (!state) throw new Error("WORLD_CUP_STATE was not found.");

if (kind === "group") {
  let found = false;

  for (const matches of Object.values(state.groupMatches || {})) {
    for (const m of matches) {
      if (String(m.id) === String(matchId)) {
        m.ga = ga;
        m.gb = gb;
        found = true;
      }
    }
  }

  if (!found) throw new Error(`Group match ${matchId} not found.`);
} else if (kind === "knockout") {
  const s = state.knockoutScores?.[String(matchId)];
  if (!s) throw new Error(`Knockout match ${matchId} not found.`);

  s.a = ga;
  s.b = gb;
  s.winner = winner || null;

  const hasLeftPens = leftPens !== undefined;
  const hasRightPens = rightPens !== undefined;

  if (hasLeftPens || hasRightPens) {
    if (!hasLeftPens || !hasRightPens) {
      throw new Error("Penalty scores must both be provided.");
    }

    if (ga !== gb) {
      throw new Error("Penalty scores should only be used when knockout goals are tied.");
    }

    const pa = parseScore(leftPens, "penalty score");
    const pb = parseScore(rightPens, "penalty score");

    if (pa === pb) {
      throw new Error("Penalty scores cannot be tied.");
    }

    s.pa = pa;
    s.pb = pb;
  } else {
    delete s.pa;
    delete s.pb;
  }
} else {
  console.error(usage);
  process.exit(1);
}

state.meta = {
  ...(state.meta || {}),
  source: "manual data file",
  updatedAt: new Date().toISOString()
};

const out = `// Manual World Cup data file.
// Edit group-stage and knockout scores here, then refresh worldcup26.html.
// Scores may be null/"" for unplayed games or nonnegative integers for played games.
// For tied knockout games, set winner to the winning team code, e.g. { a: 1, b: 1, winner: "ARG" }.
// For penalty shootouts, use pa/pb, e.g. { a: 1, b: 1, pa: 3, pb: 4, winner: "PAR" }.
// Optional helpers:
//   npm run validate:worldcup26
//   npm run score -- group A1 2 1
//   npm run score -- knockout 104 1 1 ARG
//   npm run score -- knockout 74 1 1 PAR 3 4

window.WORLD_CUP_STATE = ${JSON.stringify(state, null, 2)};
`;

writeFileSync(file, out);

const pensText =
  leftPens !== undefined && rightPens !== undefined
    ? `, penalties ${leftPens}-${rightPens}`
    : "";

console.log(
  `Updated ${kind} match ${matchId}: ${ga}-${gb}${winner ? `, winner ${winner}` : ""}${pensText}.`
);