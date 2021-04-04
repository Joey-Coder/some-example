Array.prototype.myFindIndex = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("参数必须为函数");
  }
  const ARRAY = this;
  for (let i = 0; i < ARRAY.length; i++) {
    if (callback(ARRAY[i], i) === true) {
      return i;
    }
  }
  return -1;
};


export default {}