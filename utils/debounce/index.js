function debounce(callback, wait) {
  let timer;
  return function (...args) {
    let context = this;
    if (context === null || context === undefined) {
      context = globalThis;
    }
    // console.log(...args)
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.call(context, ...args);
    }, wait);
  };
}

// globalThis.num = 1;
// function add(val) {
//   this.num += val;
//   console.log(this.num);
//   return this.num;
// }

// let t = debounce(add, 3000);

// let s = setInterval(() => {
//   t(1);
//   console.log(globalThis.num);
// }, 2000);

// setTimeout(() => {
//   clearInterval(s);
// }, 20000);

export default debounce;
