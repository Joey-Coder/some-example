function mergeObject(...args) {
  let result = {};
  args.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      // obj里面存在key
      if (result.hasOwnProperty(key)) {
        // 使用concat，把新内容和旧内容拼接到数组中
        result[key] = [].concat(result[key], obj[key]);
      } else {
        result[key] = obj[key];
      }
    });
  });
  return result;
}

export default mergeObject;
