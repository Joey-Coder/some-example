var pubSub = {
  /**
   * callbacks: {
   *  name1: {
   *     id1: cb1,
   *     id2: cb2
   *  }
   * }
   */
  _id: 1,
  callbacks: {},
};

/**
 * 发布
 * @param {string} name
 * @param {Object} data
 */
pubSub.public = function (name, data) {
  let result = [];
  if (this.callbacks[name]) {
    Object.values(this.callbacks[name]).forEach((cb) => {
      result.push(cb.call(this, data));
    });
    return result;
  }
};

/**
 * 订阅
 * @param {String} name
 * @param {function} callback
 */
pubSub.subscribe = function (name, callback) {
  //   console.log(this._id);
  let token = "token_" + this._id++;
  if (this.callbacks[name]) {
    this.callbacks[name][token] = callback;
  } else {
    this.callbacks[name] = { [token]: callback };
  }
  return token;
};

/**
 * 取消订阅
 * @param {String} id
 */
pubSub.unSubscribe = function (id) {
  if (id && typeof id === "string") {
    if (id.indexOf("token_") === 0) {
      let obj = Object.values(this.callbacks).find((obj) => {
        return obj.hasOwnProperty(id);
      });
      delete obj[id];
    } else {
      this.callbacks[id] = {};
    }
  }
};

export default pubSub;
