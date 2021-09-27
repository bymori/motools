/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 11:08:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 23:42:27
 */
export function apply(fn, obj, args) {
  // 如果obj是undefined/null, this指定为window
  if (obj === undefined || obj === null) {
    // return fn(...args)
    obj = window;
  }

  // 给obj添加一个临时方法, 方法指向的函数就是fn
  obj.tempFn = fn;
  // 通过obj来调用这个方法 ==> 也就会执行fn函数 ==> 此时fn中的this肯定为obj
  const result = obj.tempFn(...args);
  // 删除obj上的临时方法
  delete obj.tempFn;
  // 返回fn执行的结果
  return result;
}
