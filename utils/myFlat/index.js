/**
 *
 * @param {Number} depth 递归深度
 * @returns []
 */
// Array.prototype.myFlat = function (depth=0) {
//   const ARRAY = this;
//   let result = [];
//   let d = depth;
//   ARRAY.forEach((item) => {
//     if (Array.isArray(item) && d > 0) {
//       result = result.concat(item.myFlat(d - 1));
//     } else {
//       result = result.concat(item);
//     }
//   });
//   return result;
// };

Array.prototype.myFlat = function (depth = 0) {
  const ARRAY = this;
  let result = [...ARRAY];
  let d = depth;
  while (result.some((item) => Array.isArray(item)) && d > 0) {
    // concat 只能消除一层array嵌套
    result = [].concat(...result);
    d -= 1;
  }
  return result;
};
