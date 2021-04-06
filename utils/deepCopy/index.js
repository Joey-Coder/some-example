/**
 * 实现对象的深拷贝
 * @param {*} arg
 */
function deepCopy(arg, map = new Map()) {
  // 需要解决的问题
  // 1. 引用类型的拷贝 -> 递归
  // 2. 循环引用的拷贝 -> map
  // 判断是否为对象或者数组类型
  if (typeof arg === "object" && arg !== null) {
    let cache = map.get(arg);
    if (cache) return cache;
    // 新建对应的[]或者{}
    let result = Array.isArray(arg) ? [] : {};
    map.set(arg, result);
    // 对象或数组类型循环遍历
    for (let key in arg) {
      // 递归调用
      result[key] = deepCopy(arg[key], map);
    }
    return result;
  } else {
    return arg;
  }
}

export default deepCopy;
