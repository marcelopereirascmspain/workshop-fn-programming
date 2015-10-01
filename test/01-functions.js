import expect from "expect";
import {
  fnThatReturnsAnotherFn,
  fnThatReceivesAnotherFn
} from "../src/01-functions";

describe("functions in javascript", () => {
  describe("a function is a first-class citizen", () => {
    it("can be assigned to a variable", () => {
      var add = (a, b) => { return a + b};

      expect(typeof add).toEqual("function");
    });

    it("can be passed as an argument to another function", () => {
      const aFn = () => {};
      expect(fnThatReceivesAnotherFn(aFn)).toEqual("function");
    });

    it("can return another function", () => {
      expect(typeof fnThatReturnsAnotherFn()).toEqual("function");
    });
  });

  describe("A higher order function", () => {
    it("receives a function as argument, or...", () => {
      const aFn = () => {};
      expect(fnThatReceivesAnotherFn(aFn)).toEqual("function");
    });

    it("returns another function, or both.", () => {
      expect(typeof fnThatReturnsAnotherFn()).toEqual("function");
    });
  });
});