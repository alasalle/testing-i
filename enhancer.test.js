const enhancer = require("./enhancer");
const { success, fail, repair } = enhancer;
const { weapons, armor } = require("./items");
const { longsword, mace, longbow } = weapons;
const { mailCuirass, steelCuirass, chestGuard } = armor;

describe("the enhancer module", () => {
  describe("the enhancer success function", () => {
    const result1 = success(longsword);
    const result2 = success(mace);
    const result3 = success(longbow);
    const result4 = success(mailCuirass);
    const result5 = success(steelCuirass);
    const result6 = success(chestGuard);

    test("increases item enchantment by 1, stops at 20", () => {
      expect(result1.enhancement).toEqual(8)
      expect(result2.enhancement).toEqual(16)
      expect(result3.enhancement).toEqual(19)
      expect(result4.enhancement).toEqual(6)
      expect(result5.enhancement).toEqual(20)
      expect(result6.enhancement).toEqual(1)
    })
    test("updates name to reflect new level", () => {
      expect(result1.name).toEqual("[+8] Lifebender")
      expect(result2.name).toEqual("[PRI] Chaossong")
      expect(result3.name).toEqual("[TET] Solarflare")
      expect(result4.name).toEqual("[+6] Mail Cuirass of Timeless Fires")
      expect(result5.name).toEqual("[PEN] Steel Cuirass of Binding Memories")
      expect(result6.name).toEqual("[+1] Defender's Obsidian Chestguard")
    })
  });
  describe("the enhancer fail function", () => {
    const result1 = fail(longsword);
    const result2 = fail(mace);
    const result3 = fail(longbow);
    const result4 = fail(mailCuirass);
    const result5 = fail(steelCuirass);
    const result6 = fail(chestGuard);
  });
  describe("the enhancer repair function", () => {
    const result1 = repair(longsword);
    const result2 = repair(mace);
    const result3 = repair(longbow);
    const result4 = repair(mailCuirass);
    const result5 = repair(steelCuirass);
    const result6 = repair(chestGuard);
  });
})