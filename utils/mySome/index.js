Array.prototype.mySome = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("callback must be function");
  }

  let flag = false;
  const ARRAY = this;
  for (let i = 0; i < ARRAY.length; i++) {
    if (callback(ARRAY[i], i) === true) {
      flag = true;
    }
  }
  return flag;
};
