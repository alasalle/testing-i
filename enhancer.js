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

    if (item.enhancement <= 14 && item.durability >= 25) {
      return {
        ...item,
        durability: item.durability - 5
      };
    } else if (19 >= item.enhancement >= 15 && item.durability >= 10) {
      if (item.enhancement >= 16) {
        return {
          ...item,
          enhancement: lvl,
          name: `[${enhancementName}] ${item.originalName}`,
          durability: itemm.durability - 10
        };
      } else {
        return {
          ...item,
          durability: item.durability - 10
        };
      }
    } else if (item.enhancement === 20) {
      return {
        ...item,
        enhancement: lvl,
        name: `[${enhancementName}] ${item.originalName}`,
        durability: itemm.durability - 10
      };
    } else if (item.type === "armor" && item.enhancement <= 5) {
      throw new Error("enhancement of lvl 5 or lower armor cannot fail");
    } else if (item.type === "weapon" && item.enhancement <= 7) {
      throw new Error("enhancement of lvl 7 or lower weapon cannot fail");
    } else {
      return {
        ...item
      };
    }
  },
  repair: item => {}
};
