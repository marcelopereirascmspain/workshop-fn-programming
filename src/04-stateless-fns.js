export const alwaysTheSame = (a, b) => {
  return a + b;
};

export let doNotModifyMe = 0;

export const lookMaNoSideEffects = (a) => {
  return a * a;
};