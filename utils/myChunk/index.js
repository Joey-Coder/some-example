// Array.prototype.myChunk = function (size=1) {
//   const ARRAY = this;
//   const ARRAY_LENGTH = ARRAY.length;
//   let i = 0;
//   let result = [];
//   while (i < ARRAY.length) {
//     let j = i;
//     let t = [];
//     while (j < i + size && j < ARRAY.length) {
//       t.push(ARRAY[j]);
//       j++;
//     }
//     result.push(t);
//     i = j;
//   }
//   return result;
// };

/**
 * 将数组按照给定的size切分
 * @param {Numer} size
 * @returns
 */
Array.prototype.myChunk = function (size = 1) {
  const ARRAY = this;
  const ARRAY_LENGTH = ARRAY.length;
  let temp = [];
  let result = [];
  ARRAY.forEach((item) => {
    if (temp.length === 0) {
      result.push(temp);
    }
    temp.push(item);
    if (temp.length === size) {
      temp = [];
    }
  });
  return result;
};

// let s = [1, 2, 3, 4, 5, 6, 7].myChunk();
// console.log(s);
