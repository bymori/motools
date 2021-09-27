/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 11:45:42
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 23:42:25
 */
export function debounce(callback, time) {
  let timeId = null;
  return function (e) {
    if (timeId !== null) {
      clearInterval(timeId);
    }

    timeId = setTimeout(() => {
      callback.call(this,e);
      timeId = null;
    }, time);
  };
}