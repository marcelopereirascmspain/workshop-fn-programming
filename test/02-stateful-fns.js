import expect from "expect";
import {statefulFn, Planet, Saiyan} from "../src/02-stateful-fns";

describe("stateful functions", () => {
  describe("closures", () => {
    it("can store state inside and return different results based on internal state", () => {
      expect(statefulFn()).toEqual(1);
      expect(statefulFn()).toEqual(2);
      expect(statefulFn()).toEqual(3);
    });
  });

  describe("methods", () => {
    it("can potentially depend on the state of the instance", () => {
      let goku = new Saiyan("Son Goku", 336);

      expect(goku.getPowerLevel()).toEqual(336);
      goku.goSuperSaiyan();
      expect(goku.getPowerLevel()).toEqual("It's over 9000!");
    });

    it("can potentially modify other instances state", () => {
      let goku = new Saiyan("Son Goku", 336);
      let raditz = new Saiyan("Raditz", 1200);

      expect(raditz.getLifeEnergy()).toEqual(100);
      goku.kick(raditz);
      expect(raditz.getLifeEnergy()).toEqual(98);
    });
  });
});