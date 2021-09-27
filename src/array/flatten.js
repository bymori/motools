/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 15:42:31
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 23:37:14
 */
export function flatten1(arr) {
  //声明空数组
  let result = [];
  //遍历数组
  arr.forEach((item) => {
    //判断
    if (Array.isArray(item)) {
      result = result.concat(flatten1(item));
    } else {
      result = result.concat(item);
    }
  });
  //返回结果
  return result;
}

export function flatten2(arr) {
  let result = [...arr];
  while (result.some((item) => Array.isArray(item))) {
    result = [].concat(...result);
    // console.log(result);
  }
  return result;
}
