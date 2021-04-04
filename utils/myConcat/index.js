Array.prototype.myConcat = function (...args) {
  let result = this.map((item) => item);
  args.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  });
  return result;
};
