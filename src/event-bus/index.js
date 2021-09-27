/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 21:00:55
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 21:17:06
 */
const eventBus = {
  //保存类型与回调的容器
  callbacks: {},
};

//绑定事件
eventBus.on = function (type, callback) {
  //判断
  if (this.callbacks[type]) {
    //如果 callbacks 属性中存在该类型事件
    this.callbacks[type].push(callback);
  } else {
    //如果 callbacks 属性中不存在该类型事件
    this.callbacks[type] = [callback];
  }
};

//触发事件
eventBus.emit = function (type, data) {
  //判断
  if (this.callbacks[type] && this.callbacks[type].length > 0) {
    //遍历数组
    this.callbacks[type].forEach((callback) => {
      //执行回调
      callback(data);
    });
  }
};

//触发解绑
eventBus.off = function (eventName) {
  //若传入了 eventName 事件类型
  if (eventName) {
    //只是删除 eventName 对应的事件回调
    delete this.callbacks[eventName];
  } else {
    this.callbacks = {};
  }
};