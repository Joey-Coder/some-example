/**
 * 数组去重
 * @param {Array} arr
 * @returns
 */

// 双重循环
// indexOf
// function myUnique(arr) {
//   let result = [];
//   arr.forEach((element) => {
//     if (result.indexOf(element) === -1) {
//       result.push(element);
//     }
//   });
//   return result;
// }

// 双重循环
// 借助对象{}的Hash
// function myUnique(arr) {
//   let result = [];
//   let filter = {};
//   arr.forEach((element) => {
//     if (!filter[element]) {
//       filter[element] = true;
//       result.push(element);
//     }
//   });
//   return result;
// }

// 借助Set类型的唯一性
function myUnique(arr) {
  return [...new Set(arr)];
}

export default myUnique;
