Function.prototype.myCall = function (context, ...args) {
  if (context === undefined || context === null) {
    // globalThis 为全局对象，可能为global或者window
    context = globalThis;
  }
  // fn.call 则this指向fn,函数本身调用call
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
};
