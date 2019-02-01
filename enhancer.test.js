const enhancer = require("./enhancer");
const { success, fail, repair } = enhancer;
const { weapons, armor } = require("./items");
const { longsword, mace, longbow, crossbow, spear } = weapons;
const { mailCuirass, steelCuirass, chestGuard } = armor;

describe("the enhancer module", () => {
  describe("the enhancer success function", () => {
    const result1 = () => success(longsword);
    const result2 = success(mace);
    const result3 = () => success(longbow);
    const result4 = success(mailCuirass);
    const result5 = () => success(steelCuirass);
    const result6 = success(chestGuard);

    test("increases item enchantment by 1", () => {
      expect(result2.enhancement).toEqual(16)
      expect(result4.enhancement).toEqual(6)
      expect(result6.enhancement).toEqual(1)
    })
    test("updates name to reflect new level", () => {
      expect(result2.name).toEqual("[PRI] Chaossong")
      expect(result4.name).toEqual("[+6] Mail Cuirass of Timeless Fires")
      expect(result6.name).toEqual("[+1] Defender's Obsidian Chestguard")
    })
    test("throws an error when trying to enhance past lvl 20", () => {
      expect(
        result5
      ).toThrow()
    })
    test("throws error when trying to enhance lvl 14 or lower item with durability under 25", () => {
      expect(
        result1
      ).toThrow()
    })
    test("throws error when trying to enhance lvl 15 or higher item with durability under 10", () => {
      expect(
        result3
      ).toThrow()
    })
  });
  describe("the enhancer fail function", () => {
    const result7 = fail(longsword);
    const result8 = fail(mace);
    const result9 = fail(longbow);
    const result10 = fail(mailCuirass);
    const result11 = fail(steelCuirass);
    const result12 = () => fail(chestGuard);
    const result13 = fail(crossbow);
    const result14 = () => fail(spear);

    test("throws error when trying to fail lvl 5 or lower armor", () => {
      expect(
        result12
      ).toThrow()
    })
    test("throws error when trying to fail lvl 7 or lower weapon", () => {
      expect(
        result14
      ).toThrow()
    })

    test("decreases item's durability by 5 (floor is 20) if it's between lvls 0 and 14", () => {
      expect(result7.durability).toEqual(20)
      expect(result10.durability).toEqual(95)
      expect(result13.durability).toEqual(95)
    })
    test("decreases item's durability by 10 (floor is 0) if it's lvl is greater than 14", () => {
      expect(result8.durability).toEqual(90)
      expect(result9.durability).toEqual(0)
    })
    test("decreases item's enhancement level by 1 if it is lvl 16 or greater", () => {
      expect(result9.enhancement).toEqual(17)
      expect(result11.durability).toEqual(19)
    })
    test("updates name if enhancement lvl was decreased", () => {
      expect(result9.name).toEqual("[DUO] Solarflare")
      expect(result11.name).toEqual("[TET] Steel Cuirass of Binding Memories")
    })
  });
  describe("the enhancer repair function", () => {
    const result1 = repair(longsword);
    const result2 = repair(mace);
    const result3 = repair(longbow);
    const result4 = repair(mailCuirass);
    const result5 = repair(steelCuirass);
    const result6 = repair(chestGuard);

    test("restores item durability to 100", () => {
      expect(result1.durability).toEqual(100)
      expect(result2.durability).toEqual(100)
      expect(result3.durability).toEqual(100)
      expect(result4.durability).toEqual(100)
      expect(result5.durability).toEqual(100)
      expect(result6.durability).toEqual(100)
    })
  });
})