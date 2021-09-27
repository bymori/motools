/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 15:59:17
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 23:25:09
 */
export function chunk(arr, size = 1) {
  //判断传入数组长度1
  if (arr.length === 0) {
    return [];
  }
  //声明两个变量
  let result = [];
  let tmp = [];

  //遍历
  arr.forEach((item) => {
    //判断tmp元素长度是否为0
    if (tmp.length === 0) {
      //将tmp压入到result中
      result.push(tmp);
    }
    //将元素压入到临时数组tmp中
    tmp.push(item);
    //判断
    if (tmp.length === size) {
      tmp = [];
    }
  });
  return result;
}
