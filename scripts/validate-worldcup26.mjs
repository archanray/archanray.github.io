import { readFileSync } from "node:fs";
import vm from "node:vm";

const file = "assets/data/worldcup26-data.js";
const text = readFileSync(file, "utf8");
const sandbox = { window: {} };
vm.runInNewContext(text, sandbox, { filename: file });
const state = sandbox.window.WORLD_CUP_STATE;

if (!state || typeof state !== "object") {
  throw new Error("WORLD_CUP_STATE was not found.");
}

const knownTeams = new Set([
  "MEX","RSA","KOR","CZE","CAN","BIH","QAT","SUI","BRA","MAR","HAI","SCO",
  "USA","PAR","AUS","TUR","GER","CUW","CIV","ECU","NED","JPN","SWE","TUN",
  "BEL","EGY","IRN","NZL","ESP","CPV","KSA","URU","FRA","SEN","IRQ","NOR",
  "ARG","ALG","AUT","JOR","POR","COD","UZB","COL","ENG","CRO","GHA","PAN"
]);

const groups = "ABCDEFGHIJKL".split("");
const errors = [];
const seenMatches = new Set();

function isScore(x) {
  return x === null || x === "" || (Number.isInteger(x) && x >= 0);
}

for (const group of groups) {
  const matches = state.groupMatches?.[group];
  if (!Array.isArray(matches) || matches.length !== 6) {
    errors.push(`Group ${group}: expected exactly 6 matches.`);
    continue;
  }
  for (const m of matches) {
    if (!m.id) errors.push(`Group ${group}: a match is missing id.`);
    if (m.id && seenMatches.has(m.id)) errors.push(`Duplicate group match id: ${m.id}.`);
    if (m.id) seenMatches.add(m.id);
    if (!knownTeams.has(m.a)) errors.push(`${m.id}: unknown team code a=${m.a}.`);
    if (!knownTeams.has(m.b)) errors.push(`${m.id}: unknown team code b=${m.b}.`);
    if (!isScore(m.ga)) errors.push(`${m.id}: ga must be null, "", or a nonnegative integer.`);
    if (!isScore(m.gb)) errors.push(`${m.id}: gb must be null, "", or a nonnegative integer.`);
  }
}

const ko = state.knockoutScores || {};
for (let id = 73; id <= 104; id++) {
  const s = ko[String(id)];
  if (!s) {
    errors.push(`Missing knockoutScores["${id}"].`);
    continue;
  }
  if (!isScore(s.a)) errors.push(`Match ${id}: a must be null, "", or a nonnegative integer.`);
  if (!isScore(s.b)) errors.push(`Match ${id}: b must be null, "", or a nonnegative integer.`);
  if (!(s.winner === null || s.winner === "" || knownTeams.has(s.winner))) {
    errors.push(`Match ${id}: winner must be null, "", or a team code.`);
  }
}

if (errors.length) {
  console.error("World Cup data validation failed:\n");
  for (const err of errors) console.error(`- ${err}`);
  process.exit(1);
}

console.log("World Cup data OK.");
