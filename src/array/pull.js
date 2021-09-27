/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 16:18:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 23:37:51
 */
export function pull(arr, ...args) {
  //声明空数组 保存删掉的元素
  const result = [];
  //遍历arr
  for (let i = 0; i < arr.length; i++) {
    //遍历当前元素是否存在与 args 数组中
    if (args.includes(arr[i])) {
      //删除当前元素的值 存入到 result中
      result.push(arr[i]);
      //删除当前的元素
      arr.splice(i, 1);
      //下标自减
      i--;
    }
  }
  //返回
  return result;
}

export function pullAll(arr, values) {
  return pull(arr, ...values);
}
