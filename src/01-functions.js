export const fnThatReturnsAnotherFn = () => {
  return function () {
    return 2;
  };
};

export const fnThatReceivesAnotherFn = (anotherFn) => {
  return typeof anotherFn;
};