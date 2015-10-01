export const curry = (fn) => {
  return (...args) => {
    if (args.length === 2) {
      return fn.apply(this, args);
    }

    return (x) => {
      return fn.apply(this, [...args, x]);
    } 
  }
};

export const compose = (f, g) => {
  return (x) => {
    return f(g(x));
  };
};