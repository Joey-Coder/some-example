/**
 * 寻找两个数组的差集
 * @param {Array} arr
 * @returns
 */
Array.prototype.myDifference = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error("argument must be array");
  }
  const ARRAY = this;
  return ARRAY.filter((item) => {
    return !arr.includes(item);
  });
};
