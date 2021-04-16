// class版本
class Promise {
  /**
   * Promise 构造函数
   * @param {function} excutor 内部执行的构造函数
   */
  constructor(excutor) {
    const self = this;
    self.PromiseState = "pending"; // 状态值，有fulfilled和rejected
    self.PromiseResult = undefined;
    self.callbacks = [];

    /**
     * 定义Promise中的resolve方法，在excutor中调用
     * @param {any} value
     */
    function resolve(value) {
      if (self.PromiseState !== "pending") {
        // 如果当前不是pending, 直接结束
        return;
      }
      self.PromiseState = "fulfilled";
      self.PromiseResult = value;

      // 异步调用所有待处理的onRejcted回调函数
      if (self.callbacks.length > 0) {
        self.callbacks.forEach((obj) => {
          obj.onResolved();
        });
      }
    }

    /**
     * 定义Promise中的reject方法，在excutor中调用
     * @param {any} reason
     */
    function reject(reason) {
      if (self.PromiseState !== "pending") {
        return;
      }
      self.PromiseState = "rejected";
      self.PromiseResult = reason;

      // 异步调用所有待处理的onRejected
      if (self.callbacks.length > 0) {
        self.callbacks.forEach((obj) => {
          obj.onRejected();
        });
      }
    }

    try {
      // 立即同步调用excutor处理
      excutor(resolve, reject);
    } catch (error) {
      // 如果抛出了异常，直接失败
      reject(error);
    }
  }

  /**
   * 为promise指定成功/失败的回调函数
   * 函数的返回值是一个新的promise对象
   * @param {function} onResolved
   * @param {function} onRejected
   * @returns {Promise}
   */
  then(onResolved, onRejected) {
    const self = this;
    // 如果onResolved/onRejected不是函数，为它指定一个默认函数
    onResolved =
      typeof onResolved === "function" ? onResolved : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    return new Promise((resolve, reject) => {
      // 封装调用resolve/reject的函数
      function handle(callback) {
        //微任务
        queueMicrotask(() => {
          try {
            let result = callback(self.PromiseResult);
            if (result instanceof Promise) {
              // onResolved/onRejected返回的是Promise对象
              result.then(resolve, reject);
            } else {
              // onResolved/onRejecte返回的是undefined或是其他基本类型
              resolve(result);
            }
          } catch (err) {
            reject(err);
          }
        });
      }
      if (self.PromiseState === "fulfilled") {
        // 处理resolve
        handle(onResolved);
      } else if (self.PromiseState === "rejected") {
        // 处理reject和throw
        handle(onRejected);
      } else if (self.PromiseState === "pending") {
        // 处理异步setTimeout
        // 收集onResolved/onRejected
        self.callbacks.push({
          onResolved: function () {
            handle(onResolved);
          },
          onRejected: function () {
            handle(onRejected);
          },
        });
      }
    });
  }

  /**
   * 为promise指定失败的回调函数
   * 是then(null, onRejected)的语法糖
   * @param {function} onRejected
   */
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  /**
   * 返回一个指定了成功的value的promise对象
   * @param {any} value
   */
  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(resolve, reject);
      } else {
        resolve(value);
      }
    });
  }

  /**
   * 返回一个指定了失败reason的promise对象, PromiseState为rejected
   * @param {any} reason
   */
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }

  /**
   * 执行全部promises
   * @param {Array} promises
   */
  static all(promises) {
    return new Promise((resolve, reject) => {
      let promisesLength = promises.length;
      let results = new Array(promisesLength);
      let count = 0;
      for (let i = 0; i < promisesLength; i++) {
        promises[i].then(
          (value) => {
            results[i] = value;
            count++;
            if (count === promisesLength) {
              resolve(results);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }

  /**
   * 优先返回第一个执行promises
   * @param {Array} promises
   */
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }
}
