function shallowCopy(arg) {
  if (typeof arg === "object" && arg !== null) {
    if (Array.isArray(arg)) {
      // 数组类型
      return [...arg];
    } else {
      return { ...arg };
    }
  } else {
    return arg;
  }
}

export default shallowCopy;
