/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 11:45:42
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-16 14:15:33
 */
// export function debounce(callback, time) {
//   let timeId = null;
//   return function (e) {
//     if (timeId !== null) {
//       clearInterval(timeId);
//     }

//     timeId = setTimeout(() => {
//       callback.call(this,e);
//       timeId = null;
//     }, time);
//   };
// }
/**
 * @name:防抖函数
 * @test: test font
 * @msg:
 * @param {Function} fn 执行函数
 * @param {Number} delay 时间
 * @param {Boolean} immediate 是否立即执行
 * @param {Function} resultCallback 结束回调函数
 * @return {Function}
 */
export function debounce(fn, delay = 200, immediate = false, resultCallback) {
  // 1.定义一个定时器, 保存上一次的定时器
  let timer = null;
  let isInvoke = false;

  // 2.真正执行的函数
  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      // 取消上一次的定时器
      if (timer) clearTimeout(timer);

      // 判断是否需要立即执行
      if (immediate && !isInvoke) {
        const result = fn.apply(this, args);
        if (resultCallback) resultCallback(result);
        resolve(result);
        isInvoke = true;
      } else {
        // 延迟执行
        timer = setTimeout(() => {
          // 外部传入的真正要执行的函数
          const result = fn.apply(this, args);
          if (resultCallback) resultCallback(result);
          resolve(result);
          isInvoke = false;
          timer = null;
        }, delay);
      }
    });
  };

  // 封装取消功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    isInvoke = false;
  };

  return _debounce;
}
