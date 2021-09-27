/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 14:45:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 15:18:35
 */
function unique(arr) {
  //声明一个空数组
  const result = [];
  arr.forEach((item) => {
    //检测  result 数组中是否包含这个元素
    if (result.indexOf(item) === -1) {
      //如果没有该元素 则插入到 result 中
      result.push(item);
    }
  });
  //返回结果
  return result;
}

function unique2(arr) {
  //声明一个空数组
  const result = [];
  //声明空对象
  const obj = {};
  arr.forEach((item) => {
    if (obj[item] === undefined) {
      //将 item 作为下标存储在 obj中;
      obj[item] = true;
      result.push(item);
    }
  });
  //返回结果
  return result;
}

function unique3(arr) {
  /* //将数组转化为集合
  let set = new Set(arr);
  let array = [...set];
  return array; */

  return [...new Set(arr)];
}
