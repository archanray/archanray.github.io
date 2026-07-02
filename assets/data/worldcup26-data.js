// Manual World Cup data file.
// Edit group-stage and knockout scores here, then refresh worldcup26.html.
// Scores may be null/"" for unplayed games or nonnegative integers for played games.
// For tied knockout games, set winner to the winning team code, e.g. { a: 1, b: 1, winner: "ARG" }.
// For penalty shootouts, use pa/pb, e.g. { a: 1, b: 1, pa: 3, pb: 4, winner: "PAR" }.
// Optional helpers:
//   npm run validate:worldcup26
//   npm run score -- group A1 2 1
//   npm run score -- knockout 104 1 1 ARG
//   npm run score -- knockout 74 1 1 PAR 3 4

window.WORLD_CUP_STATE = {
  "groupMatches": {
    "A": [
      {
        "id": "A1",
        "a": "MEX",
        "b": "RSA",
        "ga": 2,
        "gb": 0
      },
      {
        "id": "A2",
        "a": "KOR",
        "b": "CZE",
        "ga": 2,
        "gb": 1
      },
      {
        "id": "A3",
        "a": "RSA",
        "b": "CZE",
        "ga": 1,
        "gb": 1
      },
      {
        "id": "A4",
        "a": "MEX",
        "b": "KOR",
        "ga": 1,
        "gb": 0
      },
      {
        "id": "A5",
        "a": "MEX",
        "b": "CZE",
        "ga": 3,
        "gb": 0
      },
      {
        "id": "A6",
        "a": "RSA",
        "b": "KOR",
        "ga": 1,
        "gb": 0
      }
    ],
    "B": [
      {
        "id": "B1",
        "a": "CAN",
        "b": "BIH",
        "ga": 1,
        "gb": 1
      },
      {
        "id": "B2",
        "a": "QAT",
        "b": "SUI",
        "ga": 1,
        "gb": 1
      },
      {
        "id": "B3",
        "a": "BIH",
        "b": "SUI",
        "ga": 1,
        "gb": 4
      },
      {
        "id": "B4",
        "a": "CAN",
        "b": "QAT",
        "ga": 6,
        "gb": 0
      },
      {
        "id": "B5",
        "a": "CAN",
        "b": "SUI",
        "ga": 1,
        "gb": 2
      },
      {
        "id": "B6",
        "a": "BIH",
        "b": "QAT",
        "ga": 3,
        "gb": 1
      }
    ],
    "C": [
      {
        "id": "C1",
        "a": "BRA",
        "b": "MAR",
        "ga": 1,
        "gb": 1
      },
      {
        "id": "C2",
        "a": "HAI",
        "b": "SCO",
        "ga": 0,
        "gb": 1
      },
      {
        "id": "C3",
        "a": "MAR",
        "b": "SCO",
        "ga": 1,
        "gb": 0
      },
      {
        "id": "C4",
        "a": "BRA",
        "b": "HAI",
        "ga": 3,
        "gb": 0
      },
      {
        "id": "C5",
        "a": "BRA",
        "b": "SCO",
        "ga": 3,
        "gb": 0
      },
      {
        "id": "C6",
        "a": "MAR",
        "b": "HAI",
        "ga": 4,
        "gb": 2
      }
    ],
    "D": [
      {
        "id": "D1",
        "a": "USA",
        "b": "PAR",
        "ga": 4,
        "gb": 1
      },
      {
        "id": "D2",
        "a": "AUS",
        "b": "TUR",
        "ga": 2,
        "gb": 0
      },
      {
        "id": "D3",
        "a": "USA",
        "b": "AUS",
        "ga": 2,
        "gb": 0
      },
      {
        "id": "D4",
        "a": "PAR",
        "b": "TUR",
        "ga": 1,
        "gb": 0
      },
      {
        "id": "D5",
        "a": "USA",
        "b": "TUR",
        "ga": 2,
        "gb": 3
      },
      {
        "id": "D6",
        "a": "PAR",
        "b": "AUS",
        "ga": 0,
        "gb": 0
      }
    ],
    "E": [
      {
        "id": "E1",
        "a": "GER",
        "b": "CUW",
        "ga": 7,
        "gb": 1
      },
      {
        "id": "E2",
        "a": "CIV",
        "b": "ECU",
        "ga": 1,
        "gb": 0
      },
      {
        "id": "E3",
        "a": "GER",
        "b": "CIV",
        "ga": 2,
        "gb": 1
      },
      {
        "id": "E4",
        "a": "CUW",
        "b": "ECU",
        "ga": 0,
        "gb": 0
      },
      {
        "id": "E5",
        "a": "GER",
        "b": "ECU",
        "ga": 1,
        "gb": 2
      },
      {
        "id": "E6",
        "a": "CUW",
        "b": "CIV",
        "ga": 0,
        "gb": 2
      }
    ],
    "F": [
      {
        "id": "F1",
        "a": "NED",
        "b": "JPN",
        "ga": 2,
        "gb": 2
      },
      {
        "id": "F2",
        "a": "SWE",
        "b": "TUN",
        "ga": 5,
        "gb": 1
      },
      {
        "id": "F3",
        "a": "NED",
        "b": "SWE",
        "ga": 5,
        "gb": 1
      },
      {
        "id": "F4",
        "a": "JPN",
        "b": "TUN",
        "ga": 4,
        "gb": 0
      },
      {
        "id": "F5",
        "a": "NED",
        "b": "TUN",
        "ga": 3,
        "gb": 1
      },
      {
        "id": "F6",
        "a": "JPN",
        "b": "SWE",
        "ga": 1,
        "gb": 1
      }
    ],
    "G": [
      {
        "id": "G1",
        "a": "BEL",
        "b": "EGY",
        "ga": 1,
        "gb": 1
      },
      {
        "id": "G2",
        "a": "IRN",
        "b": "NZL",
        "ga": 2,
        "gb": 2
      },
      {
        "id": "G3",
        "a": "BEL",
        "b": "IRN",
        "ga": 0,
        "gb": 0
      },
      {
        "id": "G4",
        "a": "EGY",
        "b": "NZL",
        "ga": 3,
        "gb": 1
      },
      {
        "id": "G5",
        "a": "BEL",
        "b": "NZL",
        "ga": 5,
        "gb": 1
      },
      {
        "id": "G6",
        "a": "EGY",
        "b": "IRN",
        "ga": 1,
        "gb": 1
      }
    ],
    "H": [
      {
        "id": "H1",
        "a": "ESP",
        "b": "CPV",
        "ga": 0,
        "gb": 0
      },
      {
        "id": "H2",
        "a": "KSA",
        "b": "URU",
        "ga": 1,
        "gb": 1
      },
      {
        "id": "H3",
        "a": "ESP",
        "b": "KSA",
        "ga": 4,
        "gb": 0
      },
      {
        "id": "H4",
        "a": "CPV",
        "b": "URU",
        "ga": 2,
        "gb": 2
      },
      {
        "id": "H5",
        "a": "ESP",
        "b": "URU",
        "ga": 1,
        "gb": 0
      },
      {
        "id": "H6",
        "a": "CPV",
        "b": "KSA",
        "ga": 0,
        "gb": 0
      }
    ],
    "I": [
      {
        "id": "I1",
        "a": "FRA",
        "b": "SEN",
        "ga": 3,
        "gb": 1
      },
      {
        "id": "I2",
        "a": "IRQ",
        "b": "NOR",
        "ga": 1,
        "gb": 4
      },
      {
        "id": "I3",
        "a": "FRA",
        "b": "IRQ",
        "ga": 3,
        "gb": 0
      },
      {
        "id": "I4",
        "a": "SEN",
        "b": "NOR",
        "ga": 2,
        "gb": 3
      },
      {
        "id": "I5",
        "a": "FRA",
        "b": "NOR",
        "ga": 4,
        "gb": 1
      },
      {
        "id": "I6",
        "a": "SEN",
        "b": "IRQ",
        "ga": 5,
        "gb": 0
      }
    ],
    "J": [
      {
        "id": "J1",
        "a": "ARG",
        "b": "ALG",
        "ga": 3,
        "gb": 0
      },
      {
        "id": "J2",
        "a": "AUT",
        "b": "JOR",
        "ga": 3,
        "gb": 1
      },
      {
        "id": "J3",
        "a": "ARG",
        "b": "AUT",
        "ga": 2,
        "gb": 0
      },
      {
        "id": "J4",
        "a": "ALG",
        "b": "JOR",
        "ga": 2,
        "gb": 1
      },
      {
        "id": "J5",
        "a": "ARG",
        "b": "JOR",
        "ga": 3,
        "gb": 1
      },
      {
        "id": "J6",
        "a": "ALG",
        "b": "AUT",
        "ga": 3,
        "gb": 3
      }
    ],
    "K": [
      {
        "id": "K1",
        "a": "POR",
        "b": "COD",
        "ga": 1,
        "gb": 1
      },
      {
        "id": "K2",
        "a": "UZB",
        "b": "COL",
        "ga": 1,
        "gb": 3
      },
      {
        "id": "K3",
        "a": "POR",
        "b": "UZB",
        "ga": 5,
        "gb": 0
      },
      {
        "id": "K4",
        "a": "COD",
        "b": "COL",
        "ga": 0,
        "gb": 1
      },
      {
        "id": "K5",
        "a": "POR",
        "b": "COL",
        "ga": 0,
        "gb": 0
      },
      {
        "id": "K6",
        "a": "COD",
        "b": "UZB",
        "ga": 3,
        "gb": 1
      }
    ],
    "L": [
      {
        "id": "L1",
        "a": "ENG",
        "b": "CRO",
        "ga": 4,
        "gb": 2
      },
      {
        "id": "L2",
        "a": "GHA",
        "b": "PAN",
        "ga": 1,
        "gb": 0
      },
      {
        "id": "L3",
        "a": "ENG",
        "b": "GHA",
        "ga": 0,
        "gb": 0
      },
      {
        "id": "L4",
        "a": "CRO",
        "b": "PAN",
        "ga": 1,
        "gb": 0
      },
      {
        "id": "L5",
        "a": "ENG",
        "b": "PAN",
        "ga": 2,
        "gb": 0
      },
      {
        "id": "L6",
        "a": "CRO",
        "b": "GHA",
        "ga": 2,
        "gb": 1
      }
    ]
  },
  "thirdSlotOverrides": {
    "74": null,
    "77": null,
    "79": null,
    "80": null,
    "81": null,
    "82": null,
    "85": null,
    "87": null
  },
  "knockoutScores": {
    "73": {
      "a": 0,
      "b": 1,
      "winner": null
    },
    "74": {
      "a": 1,
      "b": 1,
      "pa": 3,
      "pb": 4,
      "winner": "PAR"
    },
    "75": {
      "a": 1,
      "b": 1,
      "pa": 2,
      "pb": 3,
      "winner": "MAR"
    },
    "76": {
      "a": 2,
      "b": 1,
      "winner": null
    },
    "77": {
      "a": 3,
      "b": 0,
      "winner": null
    },
    "78": {
      "a": 1,
      "b": 2,
      "winner": null
    },
    "79": {
      "a": 2,
      "b": 0,
      "winner": null
    },
    "80": {
      "a": 2,
      "b": 1,
      "winner": null
    },
    "81": {
      "a": 2,
      "b": 0,
      "winner": null
    },
    "82": {
      "a": 3,
      "b": 2,
      "winner": null
    },
    "83": {
      "a": null,
      "b": null,
      "winner": null
    },
    "84": {
      "a": null,
      "b": null,
      "winner": null
    },
    "85": {
      "a": null,
      "b": null,
      "winner": null
    },
    "86": {
      "a": null,
      "b": null,
      "winner": null
    },
    "87": {
      "a": null,
      "b": null,
      "winner": null
    },
    "88": {
      "a": null,
      "b": null,
      "winner": null
    },
    "89": {
      "a": null,
      "b": null,
      "winner": null
    },
    "90": {
      "a": null,
      "b": null,
      "winner": null
    },
    "91": {
      "a": null,
      "b": null,
      "winner": null
    },
    "92": {
      "a": null,
      "b": null,
      "winner": null
    },
    "93": {
      "a": null,
      "b": null,
      "winner": null
    },
    "94": {
      "a": null,
      "b": null,
      "winner": null
    },
    "95": {
      "a": null,
      "b": null,
      "winner": null
    },
    "96": {
      "a": null,
      "b": null,
      "winner": null
    },
    "97": {
      "a": null,
      "b": null,
      "winner": null
    },
    "98": {
      "a": null,
      "b": null,
      "winner": null
    },
    "99": {
      "a": null,
      "b": null,
      "winner": null
    },
    "100": {
      "a": null,
      "b": null,
      "winner": null
    },
    "101": {
      "a": null,
      "b": null,
      "winner": null
    },
    "102": {
      "a": null,
      "b": null,
      "winner": null
    },
    "103": {
      "a": null,
      "b": null,
      "winner": null
    },
    "104": {
      "a": null,
      "b": null,
      "winner": null
    }
  },
  "meta": {
    "source": "manual data file",
    "updatedAt": "2026-06-30T13:32:49.249Z",
    "matchesSeen": 0
  }
};
