Array.prototype.myPull = function (...args) {
  let ARRAY = this;
  //   if (!Array.isArray(arr) ) {
  //       throw new Error('argument must be array')
  //   }
  for (let i = 0; i < args.length; i++) {
    let index = ARRAY.findIndex((item) => {
      return item === args[i];
    });
    if (index != -1) {
      ARRAY.splice(index, 1); // 改变元素组
    }
  }
};
