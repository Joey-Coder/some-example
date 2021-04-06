/**
 * 事件委托
 * @param {String} el 元素
 * @param {String} type 事件类型
 * @param {function} fn 函数类型
 * @param {String} selector 委托子元素
 */
function addEventListener(el, type, fn, selector) {
  if (typeof el === "string") {
    // 获取元素Dom
    el = document.querySelector(el);
  }

  if (!selector) {
    // 没有指定事件委托
    // this设置为父元素
    el.addEventListener(type, fn);
  } else {
    // 指定了事件委托
    el.addEventListener(type, function (e) {
      const TARGET = e.target;
      if (TARGET.matches(selector)) {
        // 如果触发元素和指定的子元素匹配
        // 则触发父元素的事件
        // this设置为子元素
        fn.call(TARGET, e);
      }
    });
  }
}
