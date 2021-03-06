/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 17:28:25
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 23:53:42
 */
export function myInstanceOf(obj, Fn) {
  //获取函数的显示原型
  let prototype = Fn.prototype;
  //获取obj的隐式原型对象
  let proto = obj.__proto__;
  //遍历原型链
  while (proto) {
    //检测原型链对象是否相等
    if (prototype === proto) {
      return true;
    }
    //如果不等于
    proto = proto.__proto__;
  }
  return false;
}
