/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 11:29:14
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-15 23:07:08
 */
// export function throttle(callback, wait) {
//   //定义开始时间
//   let start = 0;
//   // 返回一个事件监听函数(也就是节流函数)
//   return function (e) {
//     let now = Date.now();
//     // 只有当距离上次处理的时间间隔超过了wait时, 才执行处理事件的函数
//     if (now - start >= wait) {
//       // 需要指定this和参数
//       callback.call(this, e);
//       start = now;
//     }
//   };
// }

export function throttle(
  fn,
  interval,
  options = { leading: true, trailing: false }
) {
  const { leading, trailing, resultCallback } = options;
  // 1.记录上一次的开始时间
  let lastTime = 0;
  let timer = null;

  // 2.事件触发时, 真正执行的函数
  const _throttle = function (...args) {
    return new Promise((resolve, reject) => {
      // 2.1.获取当前事件触发时的时间
      const nowTime = new Date().getTime();
      if (!lastTime && !leading) lastTime = nowTime;

      // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
      const remainTime = interval - (nowTime - lastTime);
      if (remainTime <= 0) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }

        // 2.3.真正触发函数
        const result = fn.apply(this, args);
        if (resultCallback) resultCallback(result);
        resolve(result);

        // 2.4.保留上次触发的时间
        lastTime = nowTime;
        return;
      }

      if (trailing && !timer) {
        timer = setTimeout(() => {
          timer = null;
          lastTime = !leading ? 0 : new Date().getTime();

          const result = fn.apply(this, args);
          if (resultCallback) resultCallback(result);
          resolve(result);
        }, remainTime);
      }
    });
  };

  // 封装取消功能
  _throttle.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    lastTime = 0;
  };

  return _throttle;
}
