/**
 * 网络请求方法
 * @param {Objct} 请求参数，包括url, method, params, data
 */
function axios({ url, method = "GET", params = {}, data = {} }) {
  return new Promise((resolve, reject) => {
    method = method.toUpperCase();
    let xhr = new XMLHttpRequest();
    // 构造params
    let p = "?";
    Object.keys(params).forEach((key) => {
      p += key + "=" + params[key] + "&";
    });
    // 初始化xhr
    p = p.slice(0, -1);
    xhr.open(method, url + p);
    if (["GET", "PUT", "POST"].includes(method)) {
      //  设置请求头类型
      xhr.setRequestHeader("Content-type", "application/json");
      // 将data转为字符串对象再发送
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
    // 只要请求状态发生变化，就会触发onreadystatechange
    xhr.onreadystatechange = function () {
      // 请求状态为DONE，且请求码为200～300，表示请求成功
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status >= 200 && xhr.status < 300) {
          // 请求成功
          resolve({
            status: xhr.status,
            message: xhr.statusText,
            body: JSON.parse(xhr.response),
          });
        } else {
          reject({
            status: xhr.status,
            message: xhr.statusText,
            body: new Error("请求出错"),
          });
        }
      }
    };
  });
}

axios.get = function (url, options) {
  return axios(Object.assign({ url: url }, { method: "GET" }, options));
};

axios.post = function (url, options) {
  return axios(Object.assign({ url: url }, { method: "POST" }, options));
};

axios.put = function (url, options) {
  return axios(Object.assign({ url: url }, { method: "PUT" }, options));
};

axios.delete = function (url, options) {
  return axios(Object.assign({ url: url }, { method: "DELETE" }, options));
};
