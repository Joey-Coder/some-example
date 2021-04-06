var eventBus = {
  callbacks: {},
};

// 添加事件
eventBus.on = function (type, callback) {
  if (this.callbacks[type]) {
    this.callbacks[type].push(callback);
  } else {
    this.callbacks[type] = [callback];
  }
};

// 触发事件
eventBus.emit = function (type, data) {
  if (this.callbacks[type]) {
    let result = [];
    this.callbacks[type].forEach((cb) => {
      result.push(cb.call(this, data));
    });
    return result;
  }
};

// 删除事件
eventBus.off = function (type) {
  if (this.callbacks[type]) {
    delete this.callbacks[type];
  } else {
    this.callbacks = {};
  }
};

// eventBus.on("login", function (data) {
//   console.log("exec");
//   return data + " loginA";
// });
// let s = eventBus.emit("login", "joey");
// // console.log(eventBus.emit("login", "joey"));
// console.log(s);

export default eventBus;
