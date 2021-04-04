Object.prototype.myMap = function (callback) {
  let arr = this ? this : globalThis;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
};

export default {};
