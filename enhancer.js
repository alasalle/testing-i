const levels = {16: "PRI", 17: "DUO", 18: "TRI", 19: "TET", 20: "PEN"}

module.exports = {
  success: item => {
    if (item.enhancement === 20) {
      throw new Error('cannot enhance past lvl 20')
    } else {
      if (item.enhancement <= 14 && item.durability < 25) {
        throw new Error('cannot enhance a lvl 14 or lower item when durability is below 25')
      } else if (item.enhancement > 14 && item.durability < 10) {
        throw new Error('cannot enhance a lvl 15 or greater item when durability is below 10')
      } else {
        const lvl = item.enhancement + 1
        const enhancementName
        if (lvl > 15) {
          enhancementName = levels.lvl
          return {
            ...item,
            enhancement: lvl,
            name: `[${enhancementName}] ${item.name}`
          }
        } else {
          return {
            ...item,
            enhancement: lvl,
            name: `[+${lvl}] ${item.name}`

          }
        }
      }
    }
  },
  fail: item => {},
  repair: item => {},
};
