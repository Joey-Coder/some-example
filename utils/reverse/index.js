function reverse(str) {
  // 展开为数组
  let arr = [...str];
  // 反转数组
  arr.reverse();
  // join拼接数组
  return arr.join("");
}

export default reverse;
