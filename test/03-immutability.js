import expect from "expect";
import { add, concat } from "../src/helpers";

describe("immutability", () => {
  describe("strings and numbers are immutable. (thanks captain obvious)", () => {
    it("should be impossible to mutate them", () => {
      const aNumber = 40;
      const anotherNumber = 2;
      const sum = add(aNumber, anotherNumber);

      const aString = "java";
      const anotherString = "script";
      const finalString = concat(aString, anotherString);

      expect(sum).toEqual(42);
      expect(aNumber).toEqual(40);
      expect(anotherNumber).toEqual(2);

      expect(finalString).toEqual("javascript");
      expect(aString).toEqual("java");
      expect(anotherString).toEqual("script");
    });
  });

  // ES7 proposal for immutable data structures
  // https://github.com/sebmarkbage/ecmascript-immutable-data-structures

  describe("arrays and objects are not immutable in javascript", () => {
    it("should be possible mutate them", () => {
      const collection = [1, 2, 3];
      collection.push("caramba");

      const person = {
        name: "Guybrush Threepwood",
        job: "Mighty Pirate",
        age: 20 
      };

      person.age = 21;

      expect(collection).toEqual([1, 2, 3, "caramba"]);
      expect(person).toEqual({
        name: "Guybrush Threepwood",
        job: "Mighty Pirate",
        age: 21
      });
    });
  });

  // immutable-js and mori are an example of this immutable data structures libraries
  // https://facebook.github.io/immutable-js/
  // http://swannodette.github.io/mori/

  xdescribe("we can enforce immutability freezing objects, or use a library", () => {
    xit("should not be possible to mutate a freezed object", () => {
      const god = Object.freeze({
        name: "god",
        job: "god",
        age: Infinity
      });

      expect(() => {
        god.job = "DJ"
      }).toThrow();

      expect(god).toEqual({
        name: "god",
        job: "god",
        age: Infinity
      }); 
    });

    xit("should not be possible to mutate a freezed array", () => {
      const cantTouchThis = Object.freeze(["break", "it"]);

      expect(() => {      
        collection.push("down");
      }).toThrow();

      expect(cantTouchThis).toEqual(["break", "it"]);  
    });
  });
});