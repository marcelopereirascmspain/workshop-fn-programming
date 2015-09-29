export const add = (x, y) => Number(x) + Number(y);
export const square = x => x * x;
export const inc = x => x + 1;

export const curry = (fn) => {
  return (...args) => {
    if (args.length === 1) {
      return (x) => {
        return fn.apply(this, [...args, x]);
      };
    }

    return fn.apply(this, args);
  }
};

export const compose = (f, g) => {
  return x => f(g(x));
};