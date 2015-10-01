import expect from "expect";
import { add, square, inc } from "../src/helpers";
import { curry, compose } from "../src/06-composition-and-currying";

describe("currying", () => {
  it("should be able to transform a two argument fn into a one argument fn", () => {
    const curriedAdd = curry(add);

    expect(add(1, 2)).toEqual(3);
    expect(curriedAdd(4, 5)).toEqual(9);
    expect(curry(add)(1)(2)).toEqual(3);
  });
});

describe("composition", () => {
  it("should return the result of one function as the input to other function", () => {
    const incrementAndSquare = compose(square, inc);

    expect(incrementAndSquare(4)).toEqual(25);
  });
});