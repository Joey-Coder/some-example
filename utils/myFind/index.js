Array.prototype.myFind = function (callback) {
  if (typeof callback != "function") {
    throw new Error("参数必须为参数");
  }
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i) === true) {
      return arr[i];
    }
  }
};

export default {};
