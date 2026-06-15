// Manual World Cup data file.
// Edit group-stage and knockout scores here, then refresh worldcup26.html.
// Scores may be null/"" for unplayed games or nonnegative integers for played games.
// For tied knockout games, set winner to the winning team code, e.g. { a: 1, b: 1, winner: "ARG" }.
// Optional helpers:
//   npm run validate:worldcup26
//   npm run score -- group A1 2 1
//   npm run score -- knockout 104 1 1 ARG

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
        "a": "MEX",
        "b": "KOR",
        "ga": null,
        "gb": null
      },
      {
        "id": "A4",
        "a": "RSA",
        "b": "CZE",
        "ga": null,
        "gb": null
      },
      {
        "id": "A5",
        "a": "MEX",
        "b": "CZE",
        "ga": null,
        "gb": null
      },
      {
        "id": "A6",
        "a": "RSA",
        "b": "KOR",
        "ga": null,
        "gb": null
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
        "a": "CAN",
        "b": "QAT",
        "ga": null,
        "gb": null
      },
      {
        "id": "B4",
        "a": "BIH",
        "b": "SUI",
        "ga": null,
        "gb": null
      },
      {
        "id": "B5",
        "a": "CAN",
        "b": "SUI",
        "ga": null,
        "gb": null
      },
      {
        "id": "B6",
        "a": "BIH",
        "b": "QAT",
        "ga": null,
        "gb": null
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
        "a": "BRA",
        "b": "HAI",
        "ga": null,
        "gb": null
      },
      {
        "id": "C4",
        "a": "MAR",
        "b": "SCO",
        "ga": null,
        "gb": null
      },
      {
        "id": "C5",
        "a": "BRA",
        "b": "SCO",
        "ga": null,
        "gb": null
      },
      {
        "id": "C6",
        "a": "MAR",
        "b": "HAI",
        "ga": null,
        "gb": null
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
        "ga": null,
        "gb": null
      },
      {
        "id": "D4",
        "a": "PAR",
        "b": "TUR",
        "ga": null,
        "gb": null
      },
      {
        "id": "D5",
        "a": "USA",
        "b": "TUR",
        "ga": null,
        "gb": null
      },
      {
        "id": "D6",
        "a": "PAR",
        "b": "AUS",
        "ga": null,
        "gb": null
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
        "ga": null,
        "gb": null
      },
      {
        "id": "E4",
        "a": "CUW",
        "b": "ECU",
        "ga": null,
        "gb": null
      },
      {
        "id": "E5",
        "a": "GER",
        "b": "ECU",
        "ga": null,
        "gb": null
      },
      {
        "id": "E6",
        "a": "CUW",
        "b": "CIV",
        "ga": null,
        "gb": null
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
        "ga": null,
        "gb": null
      },
      {
        "id": "F4",
        "a": "JPN",
        "b": "TUN",
        "ga": null,
        "gb": null
      },
      {
        "id": "F5",
        "a": "NED",
        "b": "TUN",
        "ga": null,
        "gb": null
      },
      {
        "id": "F6",
        "a": "JPN",
        "b": "SWE",
        "ga": null,
        "gb": null
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
        "ga": null,
        "gb": null
      },
      {
        "id": "G3",
        "a": "BEL",
        "b": "IRN",
        "ga": null,
        "gb": null
      },
      {
        "id": "G4",
        "a": "EGY",
        "b": "NZL",
        "ga": null,
        "gb": null
      },
      {
        "id": "G5",
        "a": "BEL",
        "b": "NZL",
        "ga": null,
        "gb": null
      },
      {
        "id": "G6",
        "a": "EGY",
        "b": "IRN",
        "ga": null,
        "gb": null
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
        "ga": null,
        "gb": null
      },
      {
        "id": "H3",
        "a": "ESP",
        "b": "KSA",
        "ga": null,
        "gb": null
      },
      {
        "id": "H4",
        "a": "CPV",
        "b": "URU",
        "ga": null,
        "gb": null
      },
      {
        "id": "H5",
        "a": "ESP",
        "b": "URU",
        "ga": null,
        "gb": null
      },
      {
        "id": "H6",
        "a": "CPV",
        "b": "KSA",
        "ga": null,
        "gb": null
      }
    ],
    "I": [
      {
        "id": "I1",
        "a": "FRA",
        "b": "SEN",
        "ga": null,
        "gb": null
      },
      {
        "id": "I2",
        "a": "IRQ",
        "b": "NOR",
        "ga": null,
        "gb": null
      },
      {
        "id": "I3",
        "a": "FRA",
        "b": "IRQ",
        "ga": null,
        "gb": null
      },
      {
        "id": "I4",
        "a": "SEN",
        "b": "NOR",
        "ga": null,
        "gb": null
      },
      {
        "id": "I5",
        "a": "FRA",
        "b": "NOR",
        "ga": null,
        "gb": null
      },
      {
        "id": "I6",
        "a": "SEN",
        "b": "IRQ",
        "ga": null,
        "gb": null
      }
    ],
    "J": [
      {
        "id": "J1",
        "a": "ARG",
        "b": "ALG",
        "ga": null,
        "gb": null
      },
      {
        "id": "J2",
        "a": "AUT",
        "b": "JOR",
        "ga": null,
        "gb": null
      },
      {
        "id": "J3",
        "a": "ARG",
        "b": "AUT",
        "ga": null,
        "gb": null
      },
      {
        "id": "J4",
        "a": "ALG",
        "b": "JOR",
        "ga": null,
        "gb": null
      },
      {
        "id": "J5",
        "a": "ARG",
        "b": "JOR",
        "ga": null,
        "gb": null
      },
      {
        "id": "J6",
        "a": "ALG",
        "b": "AUT",
        "ga": null,
        "gb": null
      }
    ],
    "K": [
      {
        "id": "K1",
        "a": "POR",
        "b": "COD",
        "ga": null,
        "gb": null
      },
      {
        "id": "K2",
        "a": "UZB",
        "b": "COL",
        "ga": null,
        "gb": null
      },
      {
        "id": "K3",
        "a": "POR",
        "b": "UZB",
        "ga": null,
        "gb": null
      },
      {
        "id": "K4",
        "a": "COD",
        "b": "COL",
        "ga": null,
        "gb": null
      },
      {
        "id": "K5",
        "a": "POR",
        "b": "COL",
        "ga": null,
        "gb": null
      },
      {
        "id": "K6",
        "a": "COD",
        "b": "UZB",
        "ga": null,
        "gb": null
      }
    ],
    "L": [
      {
        "id": "L1",
        "a": "ENG",
        "b": "CRO",
        "ga": null,
        "gb": null
      },
      {
        "id": "L2",
        "a": "GHA",
        "b": "PAN",
        "ga": null,
        "gb": null
      },
      {
        "id": "L3",
        "a": "ENG",
        "b": "GHA",
        "ga": null,
        "gb": null
      },
      {
        "id": "L4",
        "a": "CRO",
        "b": "PAN",
        "ga": null,
        "gb": null
      },
      {
        "id": "L5",
        "a": "ENG",
        "b": "PAN",
        "ga": null,
        "gb": null
      },
      {
        "id": "L6",
        "a": "CRO",
        "b": "GHA",
        "ga": null,
        "gb": null
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
      "a": null,
      "b": null,
      "winner": null
    },
    "74": {
      "a": null,
      "b": null,
      "winner": null
    },
    "75": {
      "a": null,
      "b": null,
      "winner": null
    },
    "76": {
      "a": null,
      "b": null,
      "winner": null
    },
    "77": {
      "a": null,
      "b": null,
      "winner": null
    },
    "78": {
      "a": null,
      "b": null,
      "winner": null
    },
    "79": {
      "a": null,
      "b": null,
      "winner": null
    },
    "80": {
      "a": null,
      "b": null,
      "winner": null
    },
    "81": {
      "a": null,
      "b": null,
      "winner": null
    },
    "82": {
      "a": null,
      "b": null,
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
    "updatedAt": "2026-06-15T19:21:32.920Z",
    "matchesSeen": 0
  }
};
