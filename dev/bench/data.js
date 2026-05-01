window.BENCHMARK_DATA = {
  "lastUpdate": 1777627005306,
  "repoUrl": "https://github.com/Fleet-to-Force/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "253b95fba5a7117ebfbee5147a4861746459aad6",
          "message": "Merge pull request #1525 from yamadashy/feat/nix-flake-devshell\n\nfeat(nix): Add Nix flake with development shell",
          "timestamp": "2026-05-01T00:41:32+09:00",
          "tree_id": "d94fd2a6bab89f43b201cc6132c3dc7ddf64894c",
          "url": "https://github.com/Fleet-to-Force/repomix/commit/253b95fba5a7117ebfbee5147a4861746459aad6"
        },
        "date": 1777627004621,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 805,
            "range": "±54",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 781ms, Q3: 835ms\nAll times: 750, 756, 760, 776, 777, 778, 779, 781, 782, 783, 786, 787, 793, 800, 801, 805, 806, 810, 812, 813, 816, 834, 835, 837, 860, 882, 952, 975, 1007, 1099ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1350,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1337ms, Q3: 1365ms\nAll times: 1312, 1321, 1324, 1333, 1334, 1337, 1341, 1342, 1343, 1343, 1350, 1353, 1361, 1361, 1362, 1365, 1373, 1390, 1394, 1396ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2224,
            "range": "±66",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 2201ms, Q3: 2267ms\nAll times: 2143, 2185, 2189, 2199, 2201, 2204, 2204, 2205, 2217, 2224, 2238, 2243, 2244, 2249, 2267, 2290, 2304, 2314, 2339ms"
          }
        ]
      }
    ]
  }
}