/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 16:33:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 23:36:43
 */
export function drop(arr, size) {
  //过滤原数组 产生新数组
  /* return arr.filter((value, index) => {
    return index >= size;
  }); */

  return arr.filter((value, index) => index >= size);
}
export function dropRight(arr, size) {
  /* return arr.filter((value, index) => {
    return index <= arr.length - size;
  }); */

  return arr.filter((value, index) => index <= arr.length - size);
}
