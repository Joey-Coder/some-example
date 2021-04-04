/**
 * 返回start-end的片段数组
 * @param {Number} start
 * @param {Number} end
 * @returns
 */
Array.prototype.mySlice = function (start, end) {
  const ARRAY = this;
  const ARRAY_LENGTH = this.length;
  let result = [];
  // 处理start
  if (start) {
    if (start < 0) {
      start = (start + ARRAY_LENGTH) % ARRAY_LENGTH;
    } else if (start >= ARRAY_LENGTH) {
      return [];
    }
  } else {
    start = 0;
  }
  // 处理end
  if (end) {
    if (end < 10) {
      end = (end + ARRAY_LENGTH) % ARRAY_LENGTH;
    } else if (end >= ARRAY_LENGTH) {
      end = ARRAY_LENGTH;
    }
  } else {
    end = ARRAY_LENGTH;
  }

  if (start >= end) {
    return result;
  }
  for (let i = start; i < end; i++) {
    result.push(ARRAY[i]);
  }
  return result;
};
