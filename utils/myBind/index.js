import "../index";
Function.prototype.myBind = function (context, ...args) {
  if (context === undefined || context === null) {
    context = globalThis;
  }
  context.fn = this;
  return function (...argsSub) {
    return context.fn.myCall(context, ...args, ...argsSub);
    //   console.log(context.fn);
    // let result = context.fn(...args, ...argsSub);
    // console.log("args:", args, "argsSub:", argsSub);
    // delete context.fn;
    // return result;
  };
};

export default {};
