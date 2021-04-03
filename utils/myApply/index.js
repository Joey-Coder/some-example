/**
 * 自定义apply
 * @param {Object} context
 * @param {Array} arg
 */
Function.prototype.myApply = function (context, arg) {
  if (context === undefined || context === null) {
    context = globalThis;
  }

  context.fn = this;
  let result = context.fn(arg);
  delete context.fn;
  return result;
};

export default {}