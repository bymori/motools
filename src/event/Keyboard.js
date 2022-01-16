/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-15 23:01:49
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-16 14:14:35
 */
/**
 * @name:键盘注册热键事件
 * @test: runOnKeys(()=>{console.log('func')},'KeyQ','KeyW')
 * @msg:同时按下 Q W 即可执行函数
 * @param {Function} func 传入需要执行的函数
 * @param {String} codes 键盘 code 以文本形式传输
 * @return {Function}
 */
export function runOnKeys(func, ...codes) {
  let pressed = new Set();
  document.addEventListener('keydown', function (event) {
    pressed.add(event.code);

    for (let code of codes) {
      // 所有的按键都在集合中
      if (!pressed.has(code)) {
        return;
      }
    }

    pressed.clear();
    func();
  });

  document.addEventListener('keyup', function (event) {
    pressed.delete(event.code);
  });
}
