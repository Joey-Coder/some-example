/**
 * 判断obj是否由Fn构造生成
 * @param {Object} obj
 * @param {Function} Fn
 */
function instanceOf(obj, Fn) {
  let prototype = Fn.prototype;
  let _proto = obj.__proto__;

  // 遍历obj的隐式原型链
  while (_proto) {
    if (prototype === _proto) {
      return true;
    }
    _proto = _proto.__proto__;
  }
  return false;
}

export default instanceOf;
