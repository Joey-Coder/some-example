Array.prototype.myReduce = function (callback) {
  if (!this) {
    throw new TypeError("this must be array");
  }
  if (typeof callback !== "function") {
    throw new TypeError("callback must be function");
  }
  let arr = this;
  let result = this[0];
  for (let i = 1; i < arr.length; i++) {
    result = callback(result, arr[i], i);
  }
  return result;
};
