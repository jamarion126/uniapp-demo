const Methods = {
  /**
   * 判断是否为空
   * @param value
   */
  isEmpty(value: any) {
    if (value === "") return true; //检验空字符串
    if (value === "null") return true; //检验字符串类型的null
    if (value === "undefined") return true; //检验字符串类型的 undefined
    if (!value && value !== 0 && value !== "") return true; //检验 undefined 和 null
    if (Array.prototype.isPrototypeOf(value) && value.length === 0) return true; //检验空数组
    if (
      Object.prototype.isPrototypeOf(value) &&
      Object.keys(value).length === 0
    )
      return true; //检验空对象
    return false;
  },

  throttle(func, wait = 1000, type = 1) {
    let previous = 0;
    let timeout;
    return function () {
      let context = this;
      let args = arguments;
      if (type === 1) {
        let now = Date.now();

        if (now - previous > wait) {
          func.apply(context, args);
          previous = now;
        }
      } else if (type === 2) {
        if (!timeout) {
          timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
          }, wait);
        }
      }
    };
  },
};

export default Methods;
