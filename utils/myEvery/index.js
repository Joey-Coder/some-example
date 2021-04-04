Array.prototype.myEvery = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("callback must be function");
  }

  let flag = true;
  const ARRAY = this;
  for (let i = 0; i < ARRAY.length; i++) {
    if (callback(ARRAY[i], i) === false) {
      flag = false;
    }
  }
  return flag;
};
