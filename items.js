const weapons = {
  longsword: {
    originalName: "Lifebender",
    name: "[+7] Lifebender",
    type: "weapon",
    durability: 20,
    enhancement: 7
  },
  mace: {
    originalName: "Chaossong",
    name: "[+15] Chaossong",
    type: "weapon",
    durability: 100,
    enhancement: 15
  },
  longbow: {
    originalName: "Solarflare",
    name: "[TRI] Solarflare",
    type: "weapon",
    durability: 0,
    enhancement: 18
  }
};

const armor = {
  mailCuirass: {
    originalName: "Mail Cuirass of Timeless Fires",
    name: "[+5] Mail Cuirass of Timeless Fires",
    type: "armor",
    durability: 100,
    enhancement: 5
  },
  steelCuirass: {
    originalName: "Steel Cuirass of Binding Memories",
    name: "[PEN] Steel Cuirass of Binding Memories",
    type: "armor",
    durability: 50,
    enhancement: 20
  },
  chestGuard: {
    originalName: "Defender's Obsidian Chestguard",
    name: "Defender's Obsidian Chestguard",
    type: "armor",
    durability: 100,
    enhancement: 0
  }
};

module.exports = {
  weapons,
  armor
};
