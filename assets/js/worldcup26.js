(() => {
  const sourceState = window.WORLD_CUP_STATE || {};

  const groups = [
    { id: "A", teams: ["MEX", "RSA", "KOR", "CZE"] },
    { id: "B", teams: ["CAN", "BIH", "QAT", "SUI"] },
    { id: "C", teams: ["BRA", "MAR", "HAI", "SCO"] },
    { id: "D", teams: ["USA", "PAR", "AUS", "TUR"] },
    { id: "E", teams: ["GER", "CUW", "CIV", "ECU"] },
    { id: "F", teams: ["NED", "JPN", "SWE", "TUN"] },
    { id: "G", teams: ["BEL", "EGY", "IRN", "NZL"] },
    { id: "H", teams: ["ESP", "CPV", "KSA", "URU"] },
    { id: "I", teams: ["FRA", "SEN", "IRQ", "NOR"] },
    { id: "J", teams: ["ARG", "ALG", "AUT", "JOR"] },
    { id: "K", teams: ["POR", "COD", "UZB", "COL"] },
    { id: "L", teams: ["ENG", "CRO", "GHA", "PAN"] }
  ];

  const teams = {
    MEX: { name: "Mexico", short: "MEX", flag: "🇲🇽", c1: "#006847", c2: "#ce1126" },
    RSA: { name: "South Africa", short: "RSA", flag: "🇿🇦", c1: "#007a4d", c2: "#ffb81c" },
    KOR: { name: "Korea Republic", short: "KOR", flag: "🇰🇷", c1: "#c60c30", c2: "#003478" },
    CZE: { name: "Czechia", short: "CZE", flag: "🇨🇿", c1: "#11457e", c2: "#d7141a" },

    CAN: { name: "Canada", short: "CAN", flag: "🇨🇦", c1: "#d80621", c2: "#ffffff" },
    BIH: { name: "Bosnia and Herzegovina", short: "BIH", flag: "🇧🇦", c1: "#002395", c2: "#fecb00" },
    QAT: { name: "Qatar", short: "QAT", flag: "🇶🇦", c1: "#8a1538", c2: "#ffffff" },
    SUI: { name: "Switzerland", short: "SUI", flag: "🇨🇭", c1: "#d52b1e", c2: "#ffffff" },

    BRA: { name: "Brazil", short: "BRA", flag: "🇧🇷", c1: "#009b3a", c2: "#ffdf00" },
    MAR: { name: "Morocco", short: "MAR", flag: "🇲🇦", c1: "#c1272d", c2: "#006233" },
    HAI: { name: "Haiti", short: "HAI", flag: "🇭🇹", c1: "#00209f", c2: "#d21034" },
    SCO: { name: "Scotland", short: "SCO", flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}", c1: "#005eb8", c2: "#ffffff" },

    USA: { name: "United States", short: "USA", flag: "🇺🇸", c1: "#3c3b6e", c2: "#b22234" },
    PAR: { name: "Paraguay", short: "PAR", flag: "🇵🇾", c1: "#0038a8", c2: "#d52b1e" },
    AUS: { name: "Australia", short: "AUS", flag: "🇦🇺", c1: "#0057b8", c2: "#ffcd00" },
    TUR: { name: "Türkiye", short: "TUR", flag: "🇹🇷", c1: "#e30a17", c2: "#ffffff" },

    GER: { name: "Germany", short: "GER", flag: "🇩🇪", c1: "#000000", c2: "#ffcc00" },
    CUW: { name: "Curaçao", short: "CUW", flag: "🇨🇼", c1: "#002b7f", c2: "#f9e814" },
    CIV: { name: "Ivory Coast", short: "CIV", flag: "🇨🇮", c1: "#f77f00", c2: "#009e60" },
    ECU: { name: "Ecuador", short: "ECU", flag: "🇪🇨", c1: "#ffdd00", c2: "#034ea2" },

    NED: { name: "Netherlands", short: "NED", flag: "🇳🇱", c1: "#ff4f00", c2: "#21468b" },
    JPN: { name: "Japan", short: "JPN", flag: "🇯🇵", c1: "#bc002d", c2: "#ffffff" },
    SWE: { name: "Sweden", short: "SWE", flag: "🇸🇪", c1: "#006aa7", c2: "#fecc00" },
    TUN: { name: "Tunisia", short: "TUN", flag: "🇹🇳", c1: "#e70013", c2: "#ffffff" },

    BEL: { name: "Belgium", short: "BEL", flag: "🇧🇪", c1: "#000000", c2: "#fae042" },
    EGY: { name: "Egypt", short: "EGY", flag: "🇪🇬", c1: "#ce1126", c2: "#000000" },
    IRN: { name: "Iran", short: "IRN", flag: "🇮🇷", c1: "#239f40", c2: "#da0000" },
    NZL: { name: "New Zealand", short: "NZL", flag: "🇳🇿", c1: "#00247d", c2: "#cc142b" },

    ESP: { name: "Spain", short: "ESP", flag: "🇪🇸", c1: "#aa151b", c2: "#f1bf00" },
    CPV: { name: "Cape Verde", short: "CPV", flag: "🇨🇻", c1: "#003893", c2: "#cf2027" },
    KSA: { name: "Saudi Arabia", short: "KSA", flag: "🇸🇦", c1: "#006c35", c2: "#ffffff" },
    URU: { name: "Uruguay", short: "URU", flag: "🇺🇾", c1: "#0038a8", c2: "#fcd116" },

    FRA: { name: "France", short: "FRA", flag: "🇫🇷", c1: "#002654", c2: "#ed2939" },
    SEN: { name: "Senegal", short: "SEN", flag: "🇸🇳", c1: "#00853f", c2: "#fdef42" },
    IRQ: { name: "Iraq", short: "IRQ", flag: "🇮🇶", c1: "#ce1126", c2: "#007a3d" },
    NOR: { name: "Norway", short: "NOR", flag: "🇳🇴", c1: "#ba0c2f", c2: "#00205b" },

    ARG: { name: "Argentina", short: "ARG", flag: "🇦🇷", c1: "#75aadb", c2: "#f6b40e" },
    ALG: { name: "Algeria", short: "ALG", flag: "🇩🇿", c1: "#006233", c2: "#d21034" },
    AUT: { name: "Austria", short: "AUT", flag: "🇦🇹", c1: "#ed2939", c2: "#ffffff" },
    JOR: { name: "Jordan", short: "JOR", flag: "🇯🇴", c1: "#007a3d", c2: "#ce1126" },

    POR: { name: "Portugal", short: "POR", flag: "🇵🇹", c1: "#006600", c2: "#ff0000" },
    COD: { name: "Congo DR", short: "COD", flag: "🇨🇩", c1: "#007fff", c2: "#f7d618" },
    UZB: { name: "Uzbekistan", short: "UZB", flag: "🇺🇿", c1: "#1eb53a", c2: "#0099b5" },
    COL: { name: "Colombia", short: "COL", flag: "🇨🇴", c1: "#fcd116", c2: "#003893" },

    ENG: { name: "England", short: "ENG", flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}", c1: "#cf142b", c2: "#00247d" },
    CRO: { name: "Croatia", short: "CRO", flag: "🇭🇷", c1: "#f00000", c2: "#171796" },
    GHA: { name: "Ghana", short: "GHA", flag: "🇬🇭", c1: "#006b3f", c2: "#fcd116" },
    PAN: { name: "Panama", short: "PAN", flag: "🇵🇦", c1: "#005293", c2: "#d21034" }
  };

  const roundOf32 = [
    { id: "73", label: "M73", a: { type: "group", pos: 2, group: "A" }, b: { type: "group", pos: 2, group: "B" } },
    { id: "74", label: "M74", a: { type: "group", pos: 1, group: "E" }, b: { type: "third", groups: ["A", "B", "C", "D", "F"] } },
    { id: "75", label: "M75", a: { type: "group", pos: 1, group: "F" }, b: { type: "group", pos: 2, group: "C" } },
    { id: "76", label: "M76", a: { type: "group", pos: 1, group: "C" }, b: { type: "group", pos: 2, group: "F" } },
    { id: "77", label: "M77", a: { type: "group", pos: 1, group: "I" }, b: { type: "third", groups: ["C", "D", "F", "G", "H"] } },
    { id: "78", label: "M78", a: { type: "group", pos: 2, group: "E" }, b: { type: "group", pos: 2, group: "I" } },
    { id: "79", label: "M79", a: { type: "group", pos: 1, group: "A" }, b: { type: "third", groups: ["C", "E", "F", "H", "I"] } },
    { id: "80", label: "M80", a: { type: "group", pos: 1, group: "L" }, b: { type: "third", groups: ["E", "H", "I", "J", "K"] } },
    { id: "81", label: "M81", a: { type: "group", pos: 1, group: "D" }, b: { type: "third", groups: ["B", "E", "F", "I", "J"] } },
    { id: "82", label: "M82", a: { type: "group", pos: 1, group: "G" }, b: { type: "third", groups: ["A", "E", "H", "I", "J"] } },
    { id: "83", label: "M83", a: { type: "group", pos: 2, group: "K" }, b: { type: "group", pos: 2, group: "L" } },
    { id: "84", label: "M84", a: { type: "group", pos: 1, group: "H" }, b: { type: "group", pos: 2, group: "J" } },
    { id: "85", label: "M85", a: { type: "group", pos: 1, group: "B" }, b: { type: "third", groups: ["E", "F", "G", "I", "J"] } },
    { id: "86", label: "M86", a: { type: "group", pos: 1, group: "J" }, b: { type: "group", pos: 2, group: "H" } },
    { id: "87", label: "M87", a: { type: "group", pos: 1, group: "K" }, b: { type: "third", groups: ["D", "E", "I", "J", "L"] } },
    { id: "88", label: "M88", a: { type: "group", pos: 2, group: "D" }, b: { type: "group", pos: 2, group: "G" } }
  ];

  const knockoutRounds = [
    { key: "r32", title: "Round of 32", matches: roundOf32 },
    { key: "r16", title: "Round of 16", matches: [
      { id: "89", label: "M89", a: { type: "winner", match: "73" }, b: { type: "winner", match: "75" } },
      { id: "90", label: "M90", a: { type: "winner", match: "74" }, b: { type: "winner", match: "77" } },
      { id: "91", label: "M91", a: { type: "winner", match: "76" }, b: { type: "winner", match: "78" } },
      { id: "92", label: "M92", a: { type: "winner", match: "79" }, b: { type: "winner", match: "80" } },
      { id: "93", label: "M93", a: { type: "winner", match: "83" }, b: { type: "winner", match: "84" } },
      { id: "94", label: "M94", a: { type: "winner", match: "81" }, b: { type: "winner", match: "82" } },
      { id: "95", label: "M95", a: { type: "winner", match: "86" }, b: { type: "winner", match: "88" } },
      { id: "96", label: "M96", a: { type: "winner", match: "85" }, b: { type: "winner", match: "87" } }
    ]},
    { key: "qf", title: "Quarter-finals", matches: [
      { id: "97", label: "M97", a: { type: "winner", match: "89" }, b: { type: "winner", match: "90" } },
      { id: "98", label: "M98", a: { type: "winner", match: "93" }, b: { type: "winner", match: "94" } },
      { id: "99", label: "M99", a: { type: "winner", match: "91" }, b: { type: "winner", match: "92" } },
      { id: "100", label: "M100", a: { type: "winner", match: "95" }, b: { type: "winner", match: "96" } }
    ]},
    { key: "sf", title: "Semi-finals", matches: [
      { id: "101", label: "M101", a: { type: "winner", match: "97" }, b: { type: "winner", match: "98" } },
      { id: "102", label: "M102", a: { type: "winner", match: "99" }, b: { type: "winner", match: "100" } }
    ]},
    { key: "finals", title: "Finals", matches: [
      { id: "103", label: "Third place", a: { type: "loser", match: "101" }, b: { type: "loser", match: "102" } },
      { id: "104", label: "Final", a: { type: "winner", match: "101" }, b: { type: "winner", match: "102" } }
    ]}
  ];


  const app = document.getElementById("wc-app");
  if (!app) return;

  const state = normalizeState(sourceState);

  function defaultGroupMatches() {
    const matchMap = {};
    for (const group of groups) {
      const [t1, t2, t3, t4] = group.teams;
      matchMap[group.id] = [
        { id: `${group.id}1`, a: t1, b: t2, ga: "", gb: "" },
        { id: `${group.id}2`, a: t3, b: t4, ga: "", gb: "" },
        { id: `${group.id}3`, a: t1, b: t3, ga: "", gb: "" },
        { id: `${group.id}4`, a: t2, b: t4, ga: "", gb: "" },
        { id: `${group.id}5`, a: t1, b: t4, ga: "", gb: "" },
        { id: `${group.id}6`, a: t2, b: t3, ga: "", gb: "" }
      ];
    }
    return matchMap;
  }

  function defaultState() {
    const knockoutScores = {};
    for (const round of knockoutRounds) {
      for (const match of round.matches) knockoutScores[match.id] = { a: "", b: "", winner: "" };
    }
    return {
      groupMatches: defaultGroupMatches(),
      thirdSlotOverrides: {},
      knockoutScores
    };
  }

  function normalizeState(value) {
    const base = defaultState();
    const incomingGroupMatches = value.groupMatches || {};
    const groupMatches = {};
    for (const group of groups) {
      const matches = Array.isArray(incomingGroupMatches[group.id])
        ? incomingGroupMatches[group.id]
        : base.groupMatches[group.id];
      groupMatches[group.id] = matches.map((m, index) => ({
        id: m.id || `${group.id}${index + 1}`,
        a: m.a || base.groupMatches[group.id][index]?.a,
        b: m.b || base.groupMatches[group.id][index]?.b,
        ga: m.ga ?? "",
        gb: m.gb ?? ""
      }));
    }
    return {
      groupMatches,
      thirdSlotOverrides: { ...(value.thirdSlotOverrides || {}) },
      knockoutScores: { ...base.knockoutScores, ...(value.knockoutScores || {}) }
    };
  }

  function toInt(value) {
    if (value === "" || value === null || value === undefined) return null;
    const n = Number(value);
    return Number.isInteger(n) && n >= 0 ? n : null;
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[char]));
  }

  function scoreBox(value, label) {
    const n = toInt(value);
    const text = n === null ? "–" : String(n);
    return `<span class="wc-score-box" aria-label="${esc(label)}">${esc(text)}</span>`;
  }

  function blankStats(code, groupId) {
    return { code, group: groupId, mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0, h2h: false };
  }

  function applyMatch(stats, match) {
    const ga = toInt(match.ga);
    const gb = toInt(match.gb);
    if (!match.a || !match.b || ga === null || gb === null) return false;
    const a = stats[match.a];
    const b = stats[match.b];
    if (!a || !b) return false;

    a.mp += 1; b.mp += 1;
    a.gf += ga; a.ga += gb;
    b.gf += gb; b.ga += ga;
    a.gd = a.gf - a.ga;
    b.gd = b.gf - b.ga;

    if (ga > gb) { a.w += 1; b.l += 1; a.pts += 3; }
    else if (gb > ga) { b.w += 1; a.l += 1; b.pts += 3; }
    else { a.d += 1; b.d += 1; a.pts += 1; b.pts += 1; }
    return true;
  }

  function computeGroupStats(group) {
    const stats = {};
    for (const code of group.teams) stats[code] = blankStats(code, group.id);
    const matches = state.groupMatches[group.id] || [];
    for (const match of matches) applyMatch(stats, match);
    return Object.values(stats);
  }

  function h2hStats(rows) {
    const subset = new Set(rows.map(row => row.code));
    const groupId = rows[0]?.group;
    const stats = {};
    for (const row of rows) stats[row.code] = blankStats(row.code, row.group);
    for (const match of state.groupMatches[groupId] || []) {
      if (subset.has(match.a) && subset.has(match.b)) applyMatch(stats, match);
    }
    return stats;
  }

  function splitBy(rows, keyFn, descending = true) {
    const buckets = new Map();
    for (const row of rows) {
      const key = keyFn(row);
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(row);
    }
    const keys = [...buckets.keys()].sort((a, b) => {
      if (typeof a === "number" && typeof b === "number") return descending ? b - a : a - b;
      return descending ? String(b).localeCompare(String(a)) : String(a).localeCompare(String(b));
    });
    return keys.map(key => buckets.get(key));
  }

  function flattenTieGroups(groupsOfRows, resolver) {
    return groupsOfRows.flatMap(bucket => bucket.length <= 1 ? bucket : resolver(bucket));
  }

  function anySplit(buckets) { return buckets.length > 1; }

  function resolvePointTie(rows) {
    for (const row of rows) row.h2h = true;
    const h = h2hStats(rows);

    let buckets = splitBy(rows, row => h[row.code]?.pts ?? 0);
    if (anySplit(buckets)) return flattenTieGroups(buckets, resolvePointTie);

    buckets = splitBy(rows, row => h[row.code]?.gd ?? 0);
    if (anySplit(buckets)) return flattenTieGroups(buckets, resolvePointTie);

    buckets = splitBy(rows, row => h[row.code]?.gf ?? 0);
    if (anySplit(buckets)) return flattenTieGroups(buckets, resolvePointTie);

    buckets = splitBy(rows, row => row.gd);
    if (anySplit(buckets)) return flattenTieGroups(buckets, fallbackSort);

    buckets = splitBy(rows, row => row.gf);
    if (anySplit(buckets)) return flattenTieGroups(buckets, fallbackSort);

    return fallbackSort(rows);
  }

  function fallbackSort(rows) {
    return [...rows].sort((a, b) => b.gd - a.gd || b.gf - a.gf || teams[a.code].name.localeCompare(teams[b.code].name));
  }

  function rankGroup(group) {
    const rows = computeGroupStats(group);
    const pointBuckets = splitBy(rows, row => row.pts);
    return flattenTieGroups(pointBuckets, resolvePointTie);
  }

  function computeStandings() {
    const standings = {};
    for (const group of groups) standings[group.id] = rankGroup(group);
    return standings;
  }

  function sortThirdRows(a, b) {
    return b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || teams[a.code].name.localeCompare(teams[b.code].name);
  }

  function thirdRankings(standings) {
    return groups
      .map(group => standings[group.id][2])
      .filter(Boolean)
      .sort(sortThirdRows)
      .map((row, index) => ({ ...row, thirdRank: index + 1, qualifiedThird: index < 8 }));
  }

  function resolveGroupSlot(source, standings) {
    const row = standings[source.group]?.[source.pos - 1];
    return row ? row.code : null;
  }

  function assignThirdSlots(standings) {
    const qualified = thirdRankings(standings).filter(row => row.qualifiedThird);
    const slots = roundOf32
      .filter(match => match.b.type === "third")
      .map(match => ({ id: match.id, allowed: match.b.groups }));
    const result = {};
    const used = new Set();

    for (const slot of slots) {
      const override = state.thirdSlotOverrides[slot.id];
      const row = qualified.find(item => item.code === override);
      if (row && slot.allowed.includes(row.group) && !used.has(row.code)) {
        result[slot.id] = row.code;
        used.add(row.code);
      }
    }

    const unresolved = slots.filter(slot => !result[slot.id]);
    unresolved.sort((x, y) => {
      const cx = qualified.filter(row => !used.has(row.code) && x.allowed.includes(row.group)).length;
      const cy = qualified.filter(row => !used.has(row.code) && y.allowed.includes(row.group)).length;
      return cx - cy;
    });

    function backtrack(i) {
      if (i >= unresolved.length) return true;
      const slot = unresolved[i];
      const candidates = qualified.filter(row => !used.has(row.code) && slot.allowed.includes(row.group));
      for (const candidate of candidates) {
        result[slot.id] = candidate.code;
        used.add(candidate.code);
        if (backtrack(i + 1)) return true;
        used.delete(candidate.code);
        delete result[slot.id];
      }
      return false;
    }
    backtrack(0);
    return result;
  }

  function resolveSlot(source, standings, thirdAssignments, outcomes) {
    if (!source) return null;
    if (source.type === "group") return resolveGroupSlot(source, standings);
    if (source.type === "third") {
      const match = roundOf32.find(item => item.b === source);
      return match ? thirdAssignments[match.id] || null : null;
    }
    if (source.type === "winner") return outcomes[source.match]?.winner || null;
    if (source.type === "loser") return outcomes[source.match]?.loser || null;
    return null;
  }

  function getMatchTeams(match, standings, thirdAssignments, outcomes) {
    return {
      a: resolveSlot(match.a, standings, thirdAssignments, outcomes),
      b: resolveSlot(match.b, standings, thirdAssignments, outcomes)
    };
  }

  function computeOutcomes(standings, thirdAssignments) {
    const outcomes = {};
    for (const round of knockoutRounds) {
      for (const match of round.matches) {
        const pair = getMatchTeams(match, standings, thirdAssignments, outcomes);
        const score = state.knockoutScores[match.id] || {};
        const aScore = toInt(score.a);
        const bScore = toInt(score.b);
        let winner = null;
        let loser = null;
        if (pair.a && pair.b && aScore !== null && bScore !== null) {
          if (aScore > bScore) { winner = pair.a; loser = pair.b; }
          else if (bScore > aScore) { winner = pair.b; loser = pair.a; }
          else if (score.winner === pair.a || score.winner === pair.b) {
            winner = score.winner;
            loser = score.winner === pair.a ? pair.b : pair.a;
          }
        }
        outcomes[match.id] = { winner, loser, aScore, bScore, a: pair.a, b: pair.b };
      }
    }
    return outcomes;
  }

  function teamPill(code, mode = "full") {
    const compactClass = mode !== "full" ? ` is-${esc(mode)}` : "";

    if (!code || !teams[code]) {
      return `
        <span class="team-pill team-tbd${compactClass}" title="TBD">
          <span class="flag">·</span>
          <span class="team-code">—</span>
        </span>
      `;
    }

    const t = teams[code];

    return `
      <span
        class="team-pill${compactClass}"
        title="${esc(t.name)}"
        aria-label="${esc(t.name)}"
        style="--team:${esc(t.c1)};--team2:${esc(t.c2)}"
      >
        <span class="flag">${esc(t.flag)}</span>
        <span class="team-code">${esc(t.short)}</span>
      </span>
    `;
  }

  function renderToolbar(champion) {
    const champ = champion ? `<div class="champion-pill">Projected champion: ${teamPill(champion)}</div>` : "";
    const meta = sourceState.meta || {};
    const updated = meta.updatedAt ? new Date(meta.updatedAt).toLocaleString() : "not fetched yet";
    const source = meta.source ? ` · source: ${esc(meta.source)}` : "";
    const pulled = Number.isInteger(meta.matchesSeen) ? ` · matches seen: ${meta.matchesSeen}` : "";
    return 
    // `<section class="wc-source-toolbar">
    //   ${champ}
    // </section>`
    ;
  }

  function renderGroups(standings) {
    return `<section class="wc-section"><div class="wc-section-head"><h2>Group stage</h2></div><div class="wc-groups">${groups.map(group => renderGroupCard(group, standings[group.id])).join("")}</div></section>`;
  }

  function renderGroupCard(group, rows) {
    const matches = state.groupMatches[group.id] || [];
    const matchRows = matches.map(match => `<div class="wc-fixture">
      <div class="wc-fixture-team">${teamPill(match.a, "compact")}</div>
      <div class="wc-fixture-score">${scoreBox(match.ga, `${match.a} goals`)}<span>–</span>${scoreBox(match.gb, `${match.b} goals`)}</div>
      <div class="wc-fixture-team">${teamPill(match.b, "compact")}</div>
    </div>`).join("");

    const tableRows = rows.map((row, idx) => `<tr class="${idx < 2 ? "qualified" : idx === 2 ? "third-place" : ""}">
      <td>${idx + 1}</td>
      <td>${teamPill(row.code, "table")}</td>
      <td>${row.mp}</td>
      <td>${row.w}</td>
      <td>${row.d}</td>
      <td>${row.l}</td>
      <td>${row.gf}</td>
      <td>${row.ga}</td>
      <td>${row.gd}</td>
      <td><strong>${row.pts}</strong></td>
      <td>${row.h2h ? `<span class="wc-tiebreak">H2H</span>` : ""}</td>
    </tr>`).join("");

    return `<article class="wc-group-card">
      <div class="wc-card-head"><h3>Group ${esc(group.id)}</h3><span>scores from data file</span></div>
      <div class="wc-fixtures">${matchRows}</div>
      <div class="wc-table-wrap"><table class="wc-table wc-standings-table">
        <thead><tr><th>#</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>Pts</th><th>TB</th></tr></thead>
        <tbody>${tableRows}</tbody>
      </table></div>
    </article>`;
  }

  function renderThirdTable(thirds) {
    const rows = thirds.map(row => `<tr class="${row.qualifiedThird ? "qualified" : ""}">
      <td>${row.thirdRank}</td>
      <td>${teamPill(row.code, "table")}</td>
      <td>${row.group}</td>
      <td>${row.mp}</td>
      <td>${row.gd}</td>
      <td>${row.gf}</td>
      <td><strong>${row.pts}</strong></td>
      <td>${row.qualifiedThird ? "yes" : "no"}</td>
    </tr>`).join("");
    return `<section class="wc-third-table"><div class="wc-section-head"><h2>Best third-placed teams</h2><p>The first eight qualify. Ranking across groups uses points, goal difference, goals scored, then team name.</p></div><div class="wc-table-wrap"><table class="wc-table"><thead><tr><th>#</th><th>Team</th><th>Group</th><th>P</th><th>GD</th><th>GF</th><th>Pts</th><th>Adv.</th></tr></thead><tbody>${rows}</tbody></table></div></section>`;
  }

  function thirdOverride(match, thirdAssignments) {
    if (match.b.type !== "third") return "";
    const assigned = thirdAssignments[match.id];
    const override = state.thirdSlotOverrides[match.id];
    const label = override && teams[override] ? `${teams[override].short} manual` : assigned && teams[assigned] ? `${teams[assigned].short} auto` : "Auto";
    return `<div class="third-override static-override"><span>Third-place slot</span><strong>${esc(label)}</strong></div>`;
  }

  function winnerSelect(match, pair) {
    if (!pair.a || !pair.b) return "";
    const score = state.knockoutScores[match.id] || {};
    if (!score.winner) return "";
    const label = teams[score.winner] ? teams[score.winner].short : score.winner;
    return `<div class="winner-select static-override"><span>Winner override</span><strong>${esc(label)}</strong></div>`;
  }

  function renderKnockout(standings, thirdAssignments, outcomes) {
    return `<section class="wc-section"><div class="wc-section-head"><h2>Knockout stage</h2><p>Enter knockout goals in <code>knockoutScores</code>. If a match is tied, set <code>winner</code> to the team code.</p></div><div class="wc-bracket">${knockoutRounds.map(round => `<section class="ko-round"><h3>${esc(round.title)}</h3>${round.matches.map(match => renderKnockoutMatch(match, standings, thirdAssignments, outcomes)).join("")}</section>`).join("")}</div></section>`;
  }

  function renderKnockoutMatch(match, standings, thirdAssignments, outcomes) {
    const pair = getMatchTeams(match, standings, thirdAssignments, outcomes);
    const outcome = outcomes[match.id] || {};
    const score = state.knockoutScores[match.id] || {};
    const aWinner = outcome.winner && outcome.winner === pair.a ? "winner" : "";
    const bWinner = outcome.winner && outcome.winner === pair.b ? "winner" : "";
    return `<article class="ko-match">
      <div class="ko-label"><strong>${esc(match.label)}</strong><span>${slotLabel(match.a)} vs ${slotLabel(match.b)}</span></div>
      ${thirdOverride(match, thirdAssignments)}
      <div class="ko-team-row ${aWinner}">${teamPill(pair.a, "compact")}${scoreBox(score.a, `${match.label} first team goals`)}</div>
      <div class="ko-team-row ${bWinner}">${teamPill(pair.b, "compact")}${scoreBox(score.b, `${match.label} second team goals`)}</div>
      ${winnerSelect(match, pair)}
    </article>`;
  }

  function slotLabel(source) {
    if (source.type === "group") return `${source.pos}${ordinal(source.pos)} Group ${source.group}`;
    if (source.type === "third") return `3rd from ${source.groups.join("/")}`;
    if (source.type === "winner") return `Winner M${source.match}`;
    if (source.type === "loser") return `Loser M${source.match}`;
    return "TBD";
  }

  function ordinal(n) { return n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th"; }

  function render() {
    const standings = computeStandings();
    const thirds = thirdRankings(standings);
    const thirdAssignments = assignThirdSlots(standings);
    const outcomes = computeOutcomes(standings, thirdAssignments);
    const champion = outcomes["104"]?.winner;
    app.innerHTML = [
      renderToolbar(champion),
      renderGroups(standings),
      renderThirdTable(thirds),
      renderKnockout(standings, thirdAssignments, outcomes)
    ].join("");
  }

  render();
})();
