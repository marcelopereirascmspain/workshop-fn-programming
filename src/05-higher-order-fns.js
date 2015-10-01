export const memoize = (fn) => {
  let cache = {};

  return (x) => {
    if (cache[x]) {
      return cache[x];  
    }

    cache[x] = fn(x);

    return cache[x];
  };
};

export const map = (fn, collection) => {
  var result = [];

  for (let i = 0; i < collection.length; i++) {
    result.push(fn(collection[i]));
  }

  return result;
};

export const filter = (fn, collection) => {
  var result = [];

  for (let i = 0; i < collection.length; i++) {
    if (fn(collection[i]) === true) {
      result.push(collection[i]);
    }
  }

  return result;
};

export const reduce = (fn, initialValue, collection) => {
  var acc = initialValue;

  for (let i = 0; i < collection.length; i++) {
    acc = fn(acc, collection[i]);
  }

  return acc;
};






