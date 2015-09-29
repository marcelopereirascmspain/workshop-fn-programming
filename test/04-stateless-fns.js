import expect from "expect";
import {alwaysTheSame, lookMaNoSideEffects, doNotModifyMe} from "../src/04-stateless-fns";

describe("stateless functions", () => {
  it("return always the same value for the same arguments", () => {
    expect(alwaysTheSame(3, 4)).toEqual(7);
    expect(alwaysTheSame(3, 4)).toEqual(7);
    expect(alwaysTheSame(3, 4)).toEqual(7);

    expect(alwaysTheSame(6, 6)).toEqual(12);
    expect(alwaysTheSame(6, 6)).toEqual(12);
    expect(alwaysTheSame(6, 6)).toEqual(12);
  });

  it("don't have any observable side effects", () => {
    expect(lookMaNoSideEffects(2)).toEqual(4);
    expect(doNotModifyMe).toEqual(0);

    expect(lookMaNoSideEffects(3)).toEqual(9);
    expect(doNotModifyMe).toEqual(0);

    expect(lookMaNoSideEffects(4)).toEqual(16);
    expect(doNotModifyMe).toEqual(0);
  });
});