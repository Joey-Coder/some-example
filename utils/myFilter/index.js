/**
 * 返回满足callback的所有元素构成的数组
 * @param {function} callback
 * @returns 数组
 */
Array.prototype.myFilter = function (callback) {
  if (!this) {
    throw new Error("必须数组调用");
  }
  let arr = this;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i) === true) {
      result.push(arr[i]);
    }
  }
  return result;
};
