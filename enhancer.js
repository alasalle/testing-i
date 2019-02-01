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

    if (item.enhancement <= 14) {
      if (item.type === "armor" && item.enhancement <= 4) {
        throw new Error("level 4 and lower armor cannot fail enhancement");
      } else if (item.type === "weapon" && item.enhancement <= 6) {
        throw new Error("level 6 and lower weapon cannot fail enhancement");
      } else if (item.durability >= 25) {
        return {
          ...item,
          durability: item.durability - 5
        };
      } else {
        return {
          ...item
        };
      }
    } else if (14 < item.enhancement <= 19) {
      if (15 <= item.enhancement <= 16) {
        if (item.durability >= 10) {
          return {
            ...item,
            durability: item.durability - 10
          };
        } else {
          return {
            ...item
          };
        }
      } else {
        if (item.durability >= 10) {
          const enhancementName = levels[lvl];
          return {
            ...item,
            durability: item.durability - 10,
            enhancement: lvl,
            name: `[${enhancementName}] ${item.originalName}`
          };
        } else {
          const enhancementName = levels[lvl];
          return {
            ...item,
            enhancement: lvl,
            name: `[${enhancementName}] ${item.originalName}`
          }
        }
      }
    } else {
      const enhancementName = levels[lvl];
      return {
        ...item,
        durability: item.durability - 10,
        enhancement: lvl,
        name: `[${enhancementName}] ${item.originalName}`
      };
    }
  },

  repair: item => {}
};
