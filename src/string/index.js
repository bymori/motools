/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 18:55:20
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 20:04:14
 */
function reverseString(str) {
  //将字符串转为数组
  //   let arr = str.split('');
  let arr = [...str];
  //翻转数组
  arr.reverse();
  //将数组拼接成字符串
  let s = arr.join('');
  return s;
}

function palindrome(str) {
  return reverseString(str) === str;
}

function truncate(str, size, Omit = '...') {
  return str.slice(0, size) + Omit;
}
