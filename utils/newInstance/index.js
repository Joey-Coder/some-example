function newInstance(Fn, ...args) {
  const obj = {};

  // call绑定obj
  let result = Fn.call(obj, ...args);

  // 修改原型链
  obj.__proto__ = Fn.prototype;

  // 判断result是否有返回
  return result instanceof Object ? result : obj;
}

export default newInstance;
