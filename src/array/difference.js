/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 16:10:52
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 23:35:56
 */
export function difference(arr1, arr2 = []) {
  //判断传入参数
  if (arr1.length === 0) {
    return [];
  }
  if (arr2.length === 0) {
    return arr1.slice();
  }
  const result = arr1.filter((item) => arr2.indexOf(item) === -1);
  return result;
}
