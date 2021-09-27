/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 20:08:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 20:59:08
 */
// 自定义事件名不能与 addEventListener 冲突 Cannot read properties of null (reading 'addEventListener')

function addEventListene(el, type, fn, selector) {
  //判断 element 类型
  if (typeof el === 'string') {
    el = document.querySelector(el);
  }
  //绑定事件
  //若没有传递子元素的选择器 则给 element 元素绑定事件
  if (!selector) {
    el.addEventListener(type, fn);
  } else {
    el.addEventListener(type, function (e) {
      //获取点击的目标事件源
      const target = e.target;
      //判断选择器与目标元素是否相符合
      if (target.matches(selector)) {
        //若符合  则调用回调
        fn.call(target, e);
      }
    });
  }
}
