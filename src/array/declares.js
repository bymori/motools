/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 12:03:35
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 14:42:15
 */
function map(arr, callback) {
  //声明一个空数组
  let result = [];
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    //执行回调
    result.push(callback(arr[i], i));
  }
  //返回结果
  return result;
}

/**
 * @name:
 * @test: test font
 * @msg:
 * @param {Array} arr
 * @param {Function} callback
 * @param {*} initValue
 * @return {*}
 */
function reduce(arr, callback, initValue) {
  //声明变量
  let result = initValue;
  for (let i = 0; i < arr.length; i++) {
    //执行回调
    result = callback(result, arr[i]);
  }
  //返回最终结果
  return result;
}

function filter(arr, callback) {
  //声明一个空数组
  let result = [];
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    //执行回调
    let res = callback(arr[i], i);
    //判断 如果结果为真则压入到 result 结果中
    if (res) {
      result.push(arr[i]);
    }
  }
  return result;
}

function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    //执行回调
    let res = callback(arr[i], i);
    //判断 如果结果为真则压入到 result 结果中
    if (res) {
      return arr[i];
    }
  }
  return undefined;
}

function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    //执行回调
    let res = callback(arr[i], i);
    //判断 如果结果为真则压入到 result 结果中
    if (res) {
      return i;
    }
  }
  return -1;
}

function every(arr, callback) {
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    //执行回调
    if (!callback(arr[i], i)) {
      return false;
    }
  }
  return true;
}

function some(arr, callback) {
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    //执行回调
    if (callback(arr[i], i)) {
      return true;
    }
  }
  return false;
}
