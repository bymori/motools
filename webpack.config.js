/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 22:54:39
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-16 19:29:31
 */
const path = require('path');

module.exports = {
  // 模式
  // mode: 'development', // 也可以使用 production
  // optimization: {
  //   usedExports: true,
  // },
  mode: 'production', // 生产环境打包
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, 'dist'),
    // 打包文件
    filename: 'Mutils-utils.js',
    // 向外暴露的对象的名称
    library: 'Mutils',
    // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
    libraryTarget: 'umd',
  },
};

// npm publish 上传包
