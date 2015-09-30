import expect from "expect";
import _ from "ramda";
import I from "immutable";
import Rx from "rx";
import { add, even, square } from "../src/helpers";

const collection = [1, 2, 3, 4];
const expected = 20;

xdescribe("calculating the sum of the squares of the even numbers", () => {
  xdescribe("chaining transformations", () => {
    xit("should work with plain arrays", () => {
      var result = collection;

      expect(result).toEqual(expected);
    });

    xit("should work with immutable-js vectors", () => {
      const result = I.fromJS(collection);

      expect(I.is(result, I.fromJS(expected))).toEqual(true);
    });

    xit("should work with Rx.Observable collections", () => {
      var result = Rx.Observable.fromArray(collection);

      result.subscribe(x => {
        expect(x).toEqual(expected);
      });
    });
  });

  xdescribe("composing transformations", () => {
    xit("should square every element", () => {
      var transform;

      expect(transform(collection)).toEqual(expected);
      expect(I.is(transform(I.fromJS(collection)), expected)).toEqual(true);

      transform(Rx.Observable.fromArray(collection)).subscribe(result => {
        expect(result).toEqual(expected);
      });
    });
  });
});