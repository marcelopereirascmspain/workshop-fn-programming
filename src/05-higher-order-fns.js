export const memoize = (fn) => {
  let cache = {};
  return (x) => {
    if (!cache[x]) {
      cache[x] = fn(x);  
    }

    return cache[x];
  };
};

export const map = (fn, xs) => {
  let result = [];

  for (let i = 0; i < xs.length; i ++) {
    result.push(fn(xs[i]));
  }

  return result;
};

export const filter = (fn, xs) => {
  let result = [];

  for (let i = 0; i < xs.length; i ++) {
    if (fn(xs[i]) === true) {
      result.push(xs[i]);  
    }
  }

  return result;
};

export const reduce = (fn, initialValue, xs) => {
  var acc = initialValue;

  for (let i = 0; i < xs.length; i++) {
    acc = fn(acc, xs[i]);
  }

  return acc;
};