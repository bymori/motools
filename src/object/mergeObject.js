/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 17:36:38
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 23:53:40
 */
export function mergeObject(...objs) {
  const result = {};
  // 遍历objs
  objs.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      // 检测 result 中是否存在 key 属性
      if (result.hasOwnProperty(key)) {
        result[key] = [].concat(result[key], obj[key]);
      } else {
        // 如果没有则直接写入
        result[key] = obj[key];
      }
    });
  });
  // 可以使用reduce来代替forEach手动添加
  return result;
}
