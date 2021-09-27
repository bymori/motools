/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 11:12:21
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 11:21:06
 */
function bind(fn, obj, ...args) {
  // 返回一个新函数
  return (...args2) => {
    // 通过call调用原函数, 并指定this为obj, 实参为args与args2
    return call(fn, obj, ...args, ...args2);
  };
}
