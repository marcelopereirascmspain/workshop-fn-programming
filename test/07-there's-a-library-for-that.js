import expect from "expect";
import _ from "ramda";
import I from "immutable";
import Rx from "rx";
import { add, even, square } from "../src/helpers";

const collection = [1, 2, 3, 4];
const expected = 20;

describe("calculating the sum of the squares of the even numbers", () => {
  describe("chaining transformations", () => {
    it("should work with plain arrays", () => {
      var result =
        collection
        .filter(even)
        .map(square)
        .reduce(add);

      expect(result).toEqual(expected);
    });

    it("should work with immutable-js vectors", () => {
      const result =
        I.fromJS(collection)
        .filter(even)
        .map(square)
        .reduce(add);

      expect(I.is(result, I.fromJS(expected))).toEqual(true);
    });

    it("should work with Rx.Observable collections", () => {
      var result = Rx.Observable.fromArray(collection)
        .filter(even)
        .map(square)
        .reduce(add);

      result.subscribe(x => {
        expect(x).toEqual(expected);
      });
    });
  });

  describe("composing transformations", () => {
    it("should square every element", () => {
      var transform = _.compose(
        _.reduce(add, 0),
        _.map(square),
        _.filter(even)
      );

      expect(transform(collection)).toEqual(expected);
      expect(I.is(transform(I.fromJS(collection)), expected)).toEqual(true);

      transform(Rx.Observable.fromArray(collection)).subscribe(result => {
        expect(result).toEqual(expected);
      });
    });
  });
});