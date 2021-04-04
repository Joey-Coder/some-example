/**
 * 
 * @param {Number} depth 递归深度
 * @returns []
 */
Array.prototype.myFlat = function (depth) {
  const ARRAY = this;
  let result = [];
  let d = depth;
  ARRAY.forEach((item) => {
    if (Array.isArray(item) && d > 0) {
      result = result.concat(item.myFlat(d - 1));
    } else {
      result = result.concat(item);
    }
  });
  return result;
};

// console.log([1, [2, [3,4]]].myFlat());
