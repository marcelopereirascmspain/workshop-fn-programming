import expect from "expect";
import { add, even, square } from "../src/helpers";
import {
  memoize,
  map,
  filter,
  reduce
} from "../src/05-higher-order-fns";

const superExpensiveSquare = (x) => {
  let i = 10000000;
  let acc = [];
  while (i) {
    acc.push(i * 4);
    i--;
  }

  return square(x);
};

describe("higher order functions", () => {
  describe("memoize", () => {
    let memoizedSquare = memoize(superExpensiveSquare);

    it("should store a cache of computed values", () => {
      expect(memoizedSquare(2)).toEqual(4);
    });

    it("should be much faster the subsequent times that is called with the same value", () => {  
      expect(memoizedSquare(2)).toEqual(4);
    });
  });

  describe("map", () => {
    it("should transform every item in a collection given a function", () => {
      const xs = [1, 2, 3, 4, 5];
      const squared = map(square, xs);

      expect(squared).toEqual([1, 4, 9, 16, 25]);
    });
  });

  describe("filter", () => {
    it("should return a new collection where the predicate matches the item", () => {
      const xs = [1, 2, 3, 4, 5];
      const evens = filter(even, xs);

      expect(evens).toEqual([2, 4]);
    });
  });

  describe("reduce", () => {
    it("should return a new value accumulating the result ", () => {
      const xs = [1, 2, 3, 4, 5];
      const sum = reduce(add, 0, xs);

      expect(sum).toEqual(15);
    });
  });
});