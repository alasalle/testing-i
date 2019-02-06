const levels = { 16: "PRI", 17: "DUO", 18: "TRI", 19: "TET", 20: "PEN" };

module.exports = {
  success: item => {
    const lvl = item.enhancement + 1;
    if (item.enhancement === 20) {
      throw new Error("cannot enhance past lvl 20");
    }

    if (item.enhancement <= 14 && item.durability < 25) {
      throw new Error(
        "cannot enhance a lvl 14 or lower item when durability is below 25"
      );
    }

    if (item.enhancement > 14 && item.durability < 10) {
      throw new Error(
        "cannot enhance a lvl 15 or greater item when durability is below 10"
      );
    }

    if (item.enhancement > 14 && item.durability > 10) {
      const enhancementName = levels[lvl];

      return {
        ...item,
        enhancement: lvl,
        name: `[${enhancementName}] ${item.originalName}`
      };
    }

    if (item.enhancement <= 14 && item.durability >= 25) {
      return {
        ...item,
        enhancement: lvl,
        name: `[+${lvl}] ${item.originalName}`
      };
    }
  },

  fail: item => {
    const lvl = item.enhancement - 1;
     const enhancementName = levels[lvl];

    if (item.type === "armor" && item.enhancement <= 4) {
      throw new Error("lvl 4 or lower armor cannot fail enhancement")
    }

    if (item.type === "weapon" && item.enhancement <= 6) {
      throw new Error("level 6 or lower weapons cannot fail enhancement")
    }

    if (4 < item.enhancement && item.enhancement < 15 && item.type === "armor" && item.durability >= 25) {
      return {
        ...item,
        durability: item.durability - 5
      }
    }

    if (4 < item.enhancement && item.enhancement < 15 && item.type === "armor" && item.durability < 25) {
      return {
        ...item
      }
    }

    if (6 < item.enhancement && item.enhancement < 15 && item.type === "weapon" && item.durability >= 25) {
      return {
        ...item,
        durability: item.durability - 5
      }
    }

    if (6 < item.enhancement && item.enhancement < 15 && item.type === "weapon" && item.durability < 25) {
      return {
        ...item
      }
    }

    if (14 < item.enhancement && item.enhancement < 17 && item.durability >= 10) {
      return {
        ...item,
        durability: item.durability - 10
      }
    }

    if (14 < item.enhancement && item.enhancement < 17 && item.durability < 10) {
      return {
        ...item
      }
    }

    if (16 < item.enhancement && item.enhancement < 20 && item.durability >= 10) {
      return {
        ...item,
        durability: item.durability - 10,
        enhancement: lvl,
        name: `[${enhancementName}] ${item.originalName}`
      }
    }

    if (16 < item.enhancement && item.enhancement < 20 && item.durability < 10) {
      return {
        ...item,
        enhancement: lvl,
        name: `[${enhancementName}] ${item.originalName}`
      }
    }

    if (item.enhancement === 20) {
      return {
        ...item,
        durability: item.durability - 10,
        enhancement: lvl,
        name: `[${enhancementName}] ${item.originalName}`
      }
    }
  },

  repair: item => {
    return {
      ...item,
      durability: 100
    }
  }
};
