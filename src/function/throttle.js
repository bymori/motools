/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 11:29:14
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 11:39:58
 */
function throttle(callback, wait) {
  //定义开始时间
  let start = 0;
  // 返回一个事件监听函数(也就是节流函数)
  return function (e) {
    let now = Date.now();
    // 只有当距离上次处理的时间间隔超过了wait时, 才执行处理事件的函数
    if (now - start >= wait) {
      // 需要指定this和参数
      callback.call(this, e);
      start = now;
    }
  };
}
