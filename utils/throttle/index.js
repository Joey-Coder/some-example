function throttle(callback, wait) {
  let start = 0;
  return function (...arg) {
    let now = new Date();
    let context = this;
    if (context === undefined || context === null) {
      context = globalThis;
    }
    if (now - start >= wait) {
      let result = callback.call(context, ...arg);
      start = now;
      return result;
    }
  };
}

export default throttle;
