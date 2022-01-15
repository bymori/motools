/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-15 23:01:49
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-15 23:03:00
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
