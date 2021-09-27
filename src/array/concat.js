/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 15:20:18
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 15:40:14
 */
function concat(arr, ...args) {
  //声明一个空数组
  const result = [...arr];
  //遍历数组
  args.forEach((item) => {
    //判断 item 是否为数组
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  });
  //返回 result
  return result;
}

function slice(arr, begin, end) {
  // 如果当前数组是[], 直接返回[]
  if (arr.length === 0) {
    return [];
  }

  // 如果begin超过最大下标, 直接返回[]
  begin = begin || 0;
  if (begin >= arr.length) {
    return [];
  }

  // 如果end不大于begin, 直接返回[]
  end = end || arr.length;
  if (end > arr.length) {
    end = arr.length;
  }
  if (end <= begin) {
    return [];
  }

  //声明一个空数组
  const result = [];

  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    if (i >= begin && i < end) {
      //将下标对应的元素压入数组
      result.push(arr[i]);
    }
  }
  return result;
}
