import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const usage = `
Usage:
  npm run score -- group <MATCH_ID> <GA> <GB>
  npm run score -- knockout <MATCH_ID> <A_GOALS> <B_GOALS> [WINNER_CODE]

Examples:
  npm run score -- group A1 2 1
  npm run score -- knockout 104 1 1 ARG

Notes:
  - Use team code as WINNER_CODE only for tied knockout matches decided by penalties/extra time.
  - This rewrites assets/data/worldcup26-data.js. Review git diff before committing.
`;

const [kind, matchId, leftScore, rightScore, winner] = process.argv.slice(2);
if (!kind || !matchId || leftScore === undefined || rightScore === undefined) {
  console.error(usage);
  process.exit(1);
}

function parseScore(x) {
  if (!/^\d+$/.test(String(x))) throw new Error(`Invalid score: ${x}`);
  return Number(x);
}

const ga = parseScore(leftScore);
const gb = parseScore(rightScore);
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
} else {
  console.error(usage);
  process.exit(1);
}

state.meta = {
  ...(state.meta || {}),
  source: "manual data file",
  updatedAt: new Date().toISOString()
};

const out = `// Manual World Cup data file.\n// Edit group-stage and knockout scores here, then refresh worldcup26.html.\n// Scores may be null/"" for unplayed games or nonnegative integers for played games.\n// For tied knockout games, set winner to the winning team code, e.g. { a: 1, b: 1, winner: "ARG" }.\n// Optional helpers:\n//   npm run validate:worldcup26\n//   npm run score -- group A1 2 1\n//   npm run score -- knockout 104 1 1 ARG\n\nwindow.WORLD_CUP_STATE = ${JSON.stringify(state, null, 2)};\n`;
writeFileSync(file, out);
console.log(`Updated ${kind} match ${matchId}: ${ga}-${gb}${winner ? `, winner ${winner}` : ""}.`);
