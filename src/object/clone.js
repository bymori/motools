/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 17:52:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 18:15:14
 */
function clone1(target) {
  //判断类型 {}  []  null
  if (typeof target === 'object' && target !== null) {
    if (Array.isArray(target)) {
      return [...target];
    } else {
      return { ...target };
    }
  } else {
    return target;
  }
}

function clone2(target) {
  //判断类型 {}  []  null
  if (typeof target === 'object' && target !== null) {
    //创建一个容器
    const result = Array.isArray(target) ? [] : {};
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = target[key];
      }
    }
    return result
  } else {
    return target;
  }
}
