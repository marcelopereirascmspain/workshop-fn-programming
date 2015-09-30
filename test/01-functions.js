import expect from "expect";
import {
  fnThatReturnsAnotherFn,
  fnThatReceivesAnotherFn
} from "../src/01-functions";

xdescribe("functions in javascript", () => {
  xdescribe("a function is a first-class citizen", () => {
    xit("can be assigned to a variable", () => {
      var add;

      expect(typeof add).toEqual("function");
    });

    xit("can be passed as an argument to another function", () => {
      const aFn = () => {};
      expect(fnThatReceivesAnotherFn(aFn)).toEqual("function");
    });

    xit("can return another function", () => {
      expect(typeof fnThatReturnsAnotherFn()).toEqual("function");
    });
  });

  xdescribe("A higher order function", () => {
    xit("receives a function as argument, or...", () => {
      const aFn = () => {};
      expect(fnThatReceivesAnotherFn(aFn)).toEqual("function");
    });

    xit("returns another function, or both.", () => {
      expect(typeof fnThatReturnsAnotherFn()).toEqual("function");
    });
  });
});