const fs = require("fs");

const skins = [
  {
    id: 0,
    url: "player",
    cost: 0
  },
  {
    id: 1,
    url: "skull",
    cost: 500
  },
  {
    id: 2,
    url: "smileyface",
    cost: 200
  },
  {
    id: 3,
    url: "target",
    cost: 100
  },
  {
    id: 4,
    url: "basketball",
    cost: 400
  },
  {
    id: 5,
    url: "pistol",
    cost: 400
  }
];

fs.writeFileSync("src/skins.json", JSON.stringify(skins));

skins.sort(function(a, b){return a.cost - b.cost});

module.exports = skins;