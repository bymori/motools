/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 10:55:25
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 23:42:23
 */

export function call(Fn, obj, ...args) {
  //判断
  if (obj === undefined || obj === null) {
    obj = globalThis; //全局对象
  }
  // 为 obj 添加临时的方法
  obj.temp = Fn;
  // 调用 temp方法
  let result = obj.temp(...args);
  //删除 temp方法
  delete obj.temp;
  //返回指向结果
  return result;
}
