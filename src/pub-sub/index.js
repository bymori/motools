/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 21:21:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 22:10:55
 */
const PubSub = {
  //创建唯一id
  id: 1,
  //频道与回调保存的容器
  callbacks: {},
};

//订阅频道
PubSub.subscribe = function (channel, callback) {
  //创建唯一的编号
  let token = 'token_' + this.id++;
  //判断 callbacks 属性中是否存在 pay
  if (this.callbacks[channel]) {
    this.callbacks[channel][token] = callback;
  } else {
    this.callbacks[channel] = {
      [token]: callback,
    };
  }
  // 返回token
  return token;
};

//发布消息
PubSub.publish = function (channel, data) {
  //获取当前频道中所有的回调
  if (this.callbacks[channel]) {
    Object.values(this.callbacks[channel]).forEach((callback) => {
      //执行回调
      callback(data);
    });
  }
};

/*
4. 取消消息订阅
  1). 没有传值, flag为undefined
  2). 传入token字符串
  3). msgName字符串
*/
PubSub.unsubscribe = function (flag) {
  // 如果flag没有指定或者为null, 取消所有
  if (flag === undefined) {
    this.callbacks = {};
  } else if (typeof flag === 'string') {
    // flag是token
    if (flag.indexOf('token_') === 0) {
      // 找到flag对应的callbacks
      const callbacks = Object.values(this.callbacks).find((callbacks) =>
        callbacks.hasOwnProperty(flag)
      );
      // 如果存在, 删除对应的属性
      if (callbacks) {
        delete callbacks[flag];
      }
    } else {
      // flag是msgName
      delete this.callbacks[flag];
    }
  }
};
