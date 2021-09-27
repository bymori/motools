/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Mutils"] = factory();
	else
		root["Mutils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 15:59:17\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:25:09\r\n */\r\nfunction chunk(arr, size = 1) {\r\n  //判断传入数组长度1\r\n  if (arr.length === 0) {\r\n    return [];\r\n  }\r\n  //声明两个变量\r\n  let result = [];\r\n  let tmp = [];\r\n\r\n  //遍历\r\n  arr.forEach((item) => {\r\n    //判断tmp元素长度是否为0\r\n    if (tmp.length === 0) {\r\n      //将tmp压入到result中\r\n      result.push(tmp);\r\n    }\r\n    //将元素压入到临时数组tmp中\r\n    tmp.push(item);\r\n    //判断\r\n    if (tmp.length === size) {\r\n      tmp = [];\r\n    }\r\n  });\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => (/* binding */ concat),\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 15:20:18\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:31:40\r\n */\r\nfunction concat(arr, ...args) {\r\n  //声明一个空数组\r\n  const result = [...arr];\r\n  //遍历数组\r\n  args.forEach((item) => {\r\n    //判断 item 是否为数组\r\n    if (Array.isArray(item)) {\r\n      result.push(...item);\r\n    } else {\r\n      result.push(item);\r\n    }\r\n  });\r\n  //返回 result\r\n  return result;\r\n}\r\n\r\nfunction slice(arr, begin, end) {\r\n  // 如果当前数组是[], 直接返回[]\r\n  if (arr.length === 0) {\r\n    return [];\r\n  }\r\n\r\n  // 如果begin超过最大下标, 直接返回[]\r\n  begin = begin || 0;\r\n  if (begin >= arr.length) {\r\n    return [];\r\n  }\r\n\r\n  // 如果end不大于begin, 直接返回[]\r\n  end = end || arr.length;\r\n  if (end > arr.length) {\r\n    end = arr.length;\r\n  }\r\n  if (end <= begin) {\r\n    return [];\r\n  }\r\n\r\n  //声明一个空数组\r\n  const result = [];\r\n\r\n  //遍历数组\r\n  for (let i = 0; i < arr.length; i++) {\r\n    if (i >= begin && i < end) {\r\n      //将下标对应的元素压入数组\r\n      result.push(arr[i]);\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex),\n/* harmony export */   \"every\": () => (/* binding */ every),\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 12:03:35\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:33:02\r\n */\r\nfunction map(arr, callback) {\r\n  //声明一个空数组\r\n  let result = [];\r\n  //遍历数组\r\n  for (let i = 0; i < arr.length; i++) {\r\n    //执行回调\r\n    result.push(callback(arr[i], i));\r\n  }\r\n  //返回结果\r\n  return result;\r\n}\r\n\r\n/**\r\n * @name:\r\n * @test: test font\r\n * @msg:\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n * @param {*} initValue\r\n * @return {*}\r\n */\r\nfunction reduce(arr, callback, initValue) {\r\n  //声明变量\r\n  let result = initValue;\r\n  for (let i = 0; i < arr.length; i++) {\r\n    //执行回调\r\n    result = callback(result, arr[i]);\r\n  }\r\n  //返回最终结果\r\n  return result;\r\n}\r\n\r\nfunction filter(arr, callback) {\r\n  //声明一个空数组\r\n  let result = [];\r\n  //遍历数组\r\n  for (let i = 0; i < arr.length; i++) {\r\n    //执行回调\r\n    let res = callback(arr[i], i);\r\n    //判断 如果结果为真则压入到 result 结果中\r\n    if (res) {\r\n      result.push(arr[i]);\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\r\nfunction find(arr, callback) {\r\n  for (let i = 0; i < arr.length; i++) {\r\n    //执行回调\r\n    let res = callback(arr[i], i);\r\n    //判断 如果结果为真则压入到 result 结果中\r\n    if (res) {\r\n      return arr[i];\r\n    }\r\n  }\r\n  return undefined;\r\n}\r\n\r\nfunction findIndex(arr, callback) {\r\n  for (let i = 0; i < arr.length; i++) {\r\n    //执行回调\r\n    let res = callback(arr[i], i);\r\n    //判断 如果结果为真则压入到 result 结果中\r\n    if (res) {\r\n      return i;\r\n    }\r\n  }\r\n  return -1;\r\n}\r\n\r\nfunction every(arr, callback) {\r\n  //遍历数组\r\n  for (let i = 0; i < arr.length; i++) {\r\n    //执行回调\r\n    if (!callback(arr[i], i)) {\r\n      return false;\r\n    }\r\n  }\r\n  return true;\r\n}\r\n\r\nfunction some(arr, callback) {\r\n  //遍历数组\r\n  for (let i = 0; i < arr.length; i++) {\r\n    //执行回调\r\n    if (callback(arr[i], i)) {\r\n      return true;\r\n    }\r\n  }\r\n  return false;\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/declares.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => (/* binding */ difference)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 16:10:52\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:35:56\r\n */\r\nfunction difference(arr1, arr2 = []) {\r\n  //判断传入参数\r\n  if (arr1.length === 0) {\r\n    return [];\r\n  }\r\n  if (arr2.length === 0) {\r\n    return arr1.slice();\r\n  }\r\n  const result = arr1.filter((item) => arr2.indexOf(item) === -1);\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => (/* binding */ drop),\n/* harmony export */   \"dropRight\": () => (/* binding */ dropRight)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 16:33:46\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:36:43\r\n */\r\nfunction drop(arr, size) {\r\n  //过滤原数组 产生新数组\r\n  /* return arr.filter((value, index) => {\r\n    return index >= size;\r\n  }); */\r\n\r\n  return arr.filter((value, index) => index >= size);\r\n}\r\nfunction dropRight(arr, size) {\r\n  /* return arr.filter((value, index) => {\r\n    return index <= arr.length - size;\r\n  }); */\r\n\r\n  return arr.filter((value, index) => index <= arr.length - size);\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flatten1\": () => (/* binding */ flatten1),\n/* harmony export */   \"flatten2\": () => (/* binding */ flatten2)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 15:42:31\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:37:14\r\n */\r\nfunction flatten1(arr) {\r\n  //声明空数组\r\n  let result = [];\r\n  //遍历数组\r\n  arr.forEach((item) => {\r\n    //判断\r\n    if (Array.isArray(item)) {\r\n      result = result.concat(flatten1(item));\r\n    } else {\r\n      result = result.concat(item);\r\n    }\r\n  });\r\n  //返回结果\r\n  return result;\r\n}\r\n\r\nfunction flatten2(arr) {\r\n  let result = [...arr];\r\n  while (result.some((item) => Array.isArray(item))) {\r\n    result = [].concat(...result);\r\n    // console.log(result);\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => (/* binding */ pull),\n/* harmony export */   \"pullAll\": () => (/* binding */ pullAll)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 16:18:36\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:37:51\r\n */\r\nfunction pull(arr, ...args) {\r\n  //声明空数组 保存删掉的元素\r\n  const result = [];\r\n  //遍历arr\r\n  for (let i = 0; i < arr.length; i++) {\r\n    //遍历当前元素是否存在与 args 数组中\r\n    if (args.includes(arr[i])) {\r\n      //删除当前元素的值 存入到 result中\r\n      result.push(arr[i]);\r\n      //删除当前的元素\r\n      arr.splice(i, 1);\r\n      //下标自减\r\n      i--;\r\n    }\r\n  }\r\n  //返回\r\n  return result;\r\n}\r\n\r\nfunction pullAll(arr, values) {\r\n  return pull(arr, ...values);\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique\": () => (/* binding */ unique),\n/* harmony export */   \"unique2\": () => (/* binding */ unique2),\n/* harmony export */   \"unique3\": () => (/* binding */ unique3)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 14:45:15\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:38:36\r\n */\r\nfunction unique(arr) {\r\n  //声明一个空数组\r\n  const result = [];\r\n  arr.forEach((item) => {\r\n    //检测  result 数组中是否包含这个元素\r\n    if (result.indexOf(item) === -1) {\r\n      //如果没有该元素 则插入到 result 中\r\n      result.push(item);\r\n    }\r\n  });\r\n  //返回结果\r\n  return result;\r\n}\r\n\r\nfunction unique2(arr) {\r\n  //声明一个空数组\r\n  const result = [];\r\n  //声明空对象\r\n  const obj = {};\r\n  arr.forEach((item) => {\r\n    if (obj[item] === undefined) {\r\n      //将 item 作为下标存储在 obj中;\r\n      obj[item] = true;\r\n      result.push(item);\r\n    }\r\n  });\r\n  //返回结果\r\n  return result;\r\n}\r\n\r\nfunction unique3(arr) {\r\n  /* //将数组转化为集合\r\n  let set = new Set(arr);\r\n  let array = [...set];\r\n  return array; */\r\n\r\n  return [...new Set(arr)];\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/array/unique.js?");

/***/ }),

/***/ "./src/axios/index.js":
/*!****************************!*\
  !*** ./src/axios/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axios\": () => (/* binding */ axios)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 22:12:54\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:45:12\r\n */\r\nfunction axios({ url, method = 'GET', params = {}, data = {} }) {\r\n  // 处理method(转大写)\r\n  method = method.toUpperCase();\r\n  // 返回一个promise对象\r\n  return new Promise((resolve, reject) => {\r\n    //创建异步对象\r\n    var xhr = new XMLHttpRequest();\r\n    //设置请求行open()\r\n    // 处理params 对象\r\n    let str = '';\r\n    for (let k in params) {\r\n      str += `${k}=${params[k]}&`;\r\n    }\r\n    str = str.slice(0, -1);\r\n    xhr.open(method, url + '?' + str);\r\n    //发送请求\r\n    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {\r\n      //Content-type mime类型设置\r\n      xhr.setRequestHeader('Content-type', 'application/json');\r\n      //设置请求体\r\n      xhr.send(JSON.stringify(data));\r\n    } else {\r\n      xhr.send();\r\n    }\r\n    //设置响应结果的类型为 JSON\r\n    xhr.responseType = 'json';\r\n    //处理结果\r\n    xhr.onreadystatechange = function () {\r\n      if (xhr.readyState === 4) {\r\n        if (xhr.status >= 200 && xhr.status <= 299) {\r\n          resolve({\r\n            status: xhr.status,\r\n            message: xhr.statusText,\r\n            body: xhr.response,\r\n          });\r\n        } else {\r\n          reject(new Error('请求失败, 失败的状态码为' + xhr.status));\r\n        }\r\n      }\r\n    };\r\n  });\r\n}\r\n\r\naxios.get = function (url, options) {\r\n  //发送 AJAX 请求 GET\r\n  let config = Object.assign(options, { method: 'GET', url: url });\r\n  return axios(config);\r\n};\r\naxios.post = function (url, options) {\r\n  //发送 AJAX 请求 POST\r\n  let config = Object.assign(options, { method: 'POST', url: url });\r\n  return axios(config);\r\n};\r\naxios.put = function (url, options) {\r\n  //发送 AJAX 请求 PUT\r\n  let config = Object.assign(options, { method: 'PUT', url: url });\r\n  return axios(config);\r\n};\r\naxios.delete = function (url, options) {\r\n  //发送 AJAX 请求 DELETE\r\n  let config = Object.assign(options, { method: 'DELETE', url: url });\r\n  return axios(config);\r\n};\r\n\n\n//# sourceURL=webpack://Mutils/./src/axios/index.js?");

/***/ }),

/***/ "./src/event-bind/index.js":
/*!*********************************!*\
  !*** ./src/event-bind/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventListene\": () => (/* binding */ addEventListene)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 20:08:40\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:47:11\r\n */\r\n// 自定义事件名不能与 addEventListener 冲突 Cannot read properties of null (reading 'addEventListener')\r\n\r\nfunction addEventListene(el, type, fn, selector) {\r\n  //判断 element 类型\r\n  if (typeof el === 'string') {\r\n    el = document.querySelector(el);\r\n  }\r\n  //绑定事件\r\n  //若没有传递子元素的选择器 则给 element 元素绑定事件\r\n  if (!selector) {\r\n    el.addEventListener(type, fn);\r\n  } else {\r\n    el.addEventListener(type, function (e) {\r\n      //获取点击的目标事件源\r\n      const target = e.target;\r\n      //判断选择器与目标元素是否相符合\r\n      if (target.matches(selector)) {\r\n        //若符合  则调用回调\r\n        fn.call(target, e);\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/event-bind/index.js?");

/***/ }),

/***/ "./src/event-bus/index.js":
/*!********************************!*\
  !*** ./src/event-bus/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventBus\": () => (/* binding */ eventBus)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 21:00:55\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:59:30\r\n */\r\nconst eventBus = {\r\n  //保存类型与回调的容器\r\n  callbacks: {},\r\n};\r\n\r\n//绑定事件\r\neventBus.on =function (type, callback) {\r\n  //判断\r\n  if (this.callbacks[type]) {\r\n    //如果 callbacks 属性中存在该类型事件\r\n    this.callbacks[type].push(callback);\r\n  } else {\r\n    //如果 callbacks 属性中不存在该类型事件\r\n    this.callbacks[type] = [callback];\r\n  }\r\n};\r\n\r\n//触发事件\r\neventBus.emit = function (type, data) {\r\n  //判断\r\n  if (this.callbacks[type] && this.callbacks[type].length > 0) {\r\n    //遍历数组\r\n    this.callbacks[type].forEach((callback) => {\r\n      //执行回调\r\n      callback(data);\r\n    });\r\n  }\r\n};\r\n\r\n//触发解绑\r\neventBus.off = function (eventName) {\r\n  //若传入了 eventName 事件类型\r\n  if (eventName) {\r\n    //只是删除 eventName 对应的事件回调\r\n    delete this.callbacks[eventName];\r\n  } else {\r\n    this.callbacks = {};\r\n  }\r\n};\n\n//# sourceURL=webpack://Mutils/./src/event-bus/index.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 11:08:04\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:42:27\r\n */\r\nfunction apply(fn, obj, args) {\r\n  // 如果obj是undefined/null, this指定为window\r\n  if (obj === undefined || obj === null) {\r\n    // return fn(...args)\r\n    obj = window;\r\n  }\r\n\r\n  // 给obj添加一个临时方法, 方法指向的函数就是fn\r\n  obj.tempFn = fn;\r\n  // 通过obj来调用这个方法 ==> 也就会执行fn函数 ==> 此时fn中的this肯定为obj\r\n  const result = obj.tempFn(...args);\r\n  // 删除obj上的临时方法\r\n  delete obj.tempFn;\r\n  // 返回fn执行的结果\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 11:12:21\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:42:29\r\n */\r\n\r\nfunction bind(fn, obj, ...args) {\r\n  // 返回一个新函数\r\n  return (...args2) => {\r\n    // 通过call调用原函数, 并指定this为obj, 实参为args与args2\r\n    return (0,_call__WEBPACK_IMPORTED_MODULE_0__.call)(fn, obj, ...args, ...args2);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 10:55:25\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:42:23\r\n */\r\n\r\nfunction call(Fn, obj, ...args) {\r\n  //判断\r\n  if (obj === undefined || obj === null) {\r\n    obj = globalThis; //全局对象\r\n  }\r\n  // 为 obj 添加临时的方法\r\n  obj.temp = Fn;\r\n  // 调用 temp方法\r\n  let result = obj.temp(...args);\r\n  //删除 temp方法\r\n  delete obj.temp;\r\n  //返回指向结果\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 11:45:42\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:42:25\r\n */\r\nfunction debounce(callback, time) {\r\n  let timeId = null;\r\n  return function (e) {\r\n    if (timeId !== null) {\r\n      clearInterval(timeId);\r\n    }\r\n\r\n    timeId = setTimeout(() => {\r\n      callback.call(this,e);\r\n      timeId = null;\r\n    }, time);\r\n  };\r\n}\n\n//# sourceURL=webpack://Mutils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 11:29:14\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:42:26\r\n */\r\nfunction throttle(callback, wait) {\r\n  //定义开始时间\r\n  let start = 0;\r\n  // 返回一个事件监听函数(也就是节流函数)\r\n  return function (e) {\r\n    let now = Date.now();\r\n    // 只有当距离上次处理的时间间隔超过了wait时, 才执行处理事件的函数\r\n    if (now - start >= wait) {\r\n      // 需要指定this和参数\r\n      callback.call(this, e);\r\n      start = now;\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _array_chunk__WEBPACK_IMPORTED_MODULE_0__.chunk),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _array_concat__WEBPACK_IMPORTED_MODULE_1__.concat),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _array_concat__WEBPACK_IMPORTED_MODULE_1__.slice),\n/* harmony export */   \"map\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.map),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.reduce),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.findIndex),\n/* harmony export */   \"every\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.every),\n/* harmony export */   \"some\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.some),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_3__.difference),\n/* harmony export */   \"drop\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_4__.drop),\n/* harmony export */   \"dropRight\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_4__.dropRight),\n/* harmony export */   \"flatten1\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_5__.flatten1),\n/* harmony export */   \"flatten2\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_5__.flatten2),\n/* harmony export */   \"pull\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_6__.pull),\n/* harmony export */   \"pullAll\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_6__.pullAll),\n/* harmony export */   \"unique\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_7__.unique),\n/* harmony export */   \"unique2\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_7__.unique2),\n/* harmony export */   \"unique3\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_7__.unique3),\n/* harmony export */   \"axios\": () => (/* reexport safe */ _axios_index__WEBPACK_IMPORTED_MODULE_8__.axios),\n/* harmony export */   \"addEventListene\": () => (/* reexport safe */ _event_bind_index__WEBPACK_IMPORTED_MODULE_9__.addEventListene),\n/* harmony export */   \"eventBus\": () => (/* reexport safe */ _event_bus_index__WEBPACK_IMPORTED_MODULE_10__.eventBus),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_11__.apply),\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_12__.call),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_13__.bind),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_14__.debounce),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_15__.throttle),\n/* harmony export */   \"clone1\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_16__.clone1),\n/* harmony export */   \"clone2\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_16__.clone2),\n/* harmony export */   \"deepClone1\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_17__.deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_17__.deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_17__.deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_17__.deepClone4),\n/* harmony export */   \"mergeObject\": () => (/* reexport safe */ _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__.mergeObject),\n/* harmony export */   \"myInstanceOf\": () => (/* reexport safe */ _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_19__.myInstanceOf),\n/* harmony export */   \"newInstance\": () => (/* reexport safe */ _object_newInstance__WEBPACK_IMPORTED_MODULE_20__.newInstance),\n/* harmony export */   \"PubSub\": () => (/* reexport safe */ _pub_sub_index__WEBPACK_IMPORTED_MODULE_21__.PubSub),\n/* harmony export */   \"reverseString\": () => (/* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_22__.reverseString),\n/* harmony export */   \"palindrome\": () => (/* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_22__.palindrome)\n/* harmony export */ });\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony import */ var _axios_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./axios/index */ \"./src/axios/index.js\");\n/* harmony import */ var _event_bind_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-bind/index */ \"./src/event-bind/index.js\");\n/* harmony import */ var _event_bus_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-bus/index */ \"./src/event-bus/index.js\");\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony import */ var _object_deepClone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/deepClone */ \"./src/object/deepClone.js\");\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony import */ var _pub_sub_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pub-sub/index */ \"./src/pub-sub/index.js\");\n/* harmony import */ var _string_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./string/index */ \"./src/string/index.js\");\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 23:01:09\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-28 00:04:26\r\n */\r\n\r\n//array\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//axios\r\n\r\n\r\n//event-bind\r\n\r\n\r\n//event-bus\r\n\r\n\r\n//function\r\n\r\n\r\n\r\n\r\n\r\n\r\n// object\r\n\r\n\r\n\r\n\r\n\r\n\r\n// pub-sub\r\n\r\n\r\n// string\r\n\n\n//# sourceURL=webpack://Mutils/./src/index.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone1\": () => (/* binding */ clone1),\n/* harmony export */   \"clone2\": () => (/* binding */ clone2)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 17:52:34\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:53:33\r\n */\r\nfunction clone1(target) {\r\n  //判断类型 {}  []  null\r\n  if (typeof target === 'object' && target !== null) {\r\n    if (Array.isArray(target)) {\r\n      return [...target];\r\n    } else {\r\n      return { ...target };\r\n    }\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\r\nfunction clone2(target) {\r\n  //判断类型 {}  []  null\r\n  if (typeof target === 'object' && target !== null) {\r\n    //创建一个容器\r\n    const result = Array.isArray(target) ? [] : {};\r\n    for (let key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        result[key] = target[key];\r\n      }\r\n    }\r\n    return result\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deepClone1\": () => (/* binding */ deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* binding */ deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* binding */ deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* binding */ deepClone4)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 18:17:07\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:53:37\r\n */\r\nfunction deepClone1(target) {\r\n  //通过数据创建 json 格式的字符串\r\n  let str = JSON.stringify(target);\r\n  // 将 josn 字符串创建为js数据\r\n  let data = JSON.parse(str);\r\n  return data;\r\n}\r\n\r\nfunction deepClone2(target) {\r\n  //检测数据类型\r\n  if (target !== null && typeof target === 'object') {\r\n    //创建一个容器\r\n    const cloneTarget = Array.isArray(target) ? [] : {};\r\n    //遍历对象\r\n    for (const key in target) {\r\n      //检测该属性是否为对象本身的属性 不能拷贝原型对象的属性\r\n      if (target.hasOwnProperty(key)) {\r\n        //拷贝\r\n        cloneTarget[key] = deepClone2(target[key]);\r\n      }\r\n    }\r\n    return cloneTarget;\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\r\nfunction deepClone3(target, map = new Map()) {\r\n  //检测数据类型\r\n  if (target !== null && typeof target === 'object') {\r\n    //克隆数据前 判断数据之前是否被克隆过\r\n    let cache = map.get(target);\r\n    if (cache) {\r\n      return cache;\r\n    }\r\n    //创建一个容器\r\n    const cloneTarget = Array.isArray(target) ? [] : {};\r\n    //将新的结果存入到容器中\r\n    map.set(target, cloneTarget);\r\n    //遍历对象\r\n    for (const key in target) {\r\n      //检测该属性是否为对象本身的属性 不能拷贝原型对象的属性\r\n      if (target.hasOwnProperty(key)) {\r\n        //拷贝\r\n        cloneTarget[key] = deepClone3(target[key], map);\r\n      }\r\n    }\r\n    return cloneTarget;\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\r\nfunction deepClone4(target, map = new Map()) {\r\n  //检测数据类型\r\n  if (target !== null && typeof target === 'object') {\r\n    //克隆数据前 判断数据之前是否被克隆过\r\n    let cache = map.get(target);\r\n    if (cache) {\r\n      return cache;\r\n    }\r\n\r\n    //判断目标数据类型\r\n    let isArray = Array.isArray(target);\r\n    //创建一个容器\r\n    const cloneTarget = isArray ? [] : {};\r\n    //将新的结果存入到容器中\r\n    map.set(target, cloneTarget);\r\n    //如果目标数据为数组\r\n    if (isArray) {\r\n      // forEach 遍历\r\n      target.forEach((item, index) => {\r\n        cloneTarget[index] = deepClone4(item, map);\r\n      });\r\n    } else {\r\n      Object.keys(target).forEach((key) => {\r\n        cloneTarget[key] = deepClone4(target[key], map);\r\n      });\r\n    }\r\n\r\n    return cloneTarget;\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeObject\": () => (/* binding */ mergeObject)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 17:36:38\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:53:40\r\n */\r\nfunction mergeObject(...objs) {\r\n  const result = {};\r\n  // 遍历objs\r\n  objs.forEach((obj) => {\r\n    Object.keys(obj).forEach((key) => {\r\n      // 检测 result 中是否存在 key 属性\r\n      if (result.hasOwnProperty(key)) {\r\n        result[key] = [].concat(result[key], obj[key]);\r\n      } else {\r\n        // 如果没有则直接写入\r\n        result[key] = obj[key];\r\n      }\r\n    });\r\n  });\r\n  // 可以使用reduce来代替forEach手动添加\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myInstanceOf\": () => (/* binding */ myInstanceOf)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 17:28:25\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:53:42\r\n */\r\nfunction myInstanceOf(obj, Fn) {\r\n  //获取函数的显示原型\r\n  let prototype = Fn.prototype;\r\n  //获取obj的隐式原型对象\r\n  let proto = obj.__proto__;\r\n  //遍历原型链\r\n  while (proto) {\r\n    //检测原型链对象是否相等\r\n    if (prototype === proto) {\r\n      return true;\r\n    }\r\n    //如果不等于\r\n    proto = proto.__proto__;\r\n  }\r\n  return false;\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => (/* binding */ newInstance)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 16:47:07\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:53:45\r\n */\r\nfunction newInstance(Fn, ...args) {\r\n  // 创建一个空的object实例对象obj, 作为Fn的实例对象\r\n  const obj = {};\r\n  // 将Fn的prototype属性值赋值给obj的__proto__属性值\r\n  const result = Fn.call(obj, ...args);\r\n  // 调用Fn, 指定this为obj, 参数为args列表\r\n  obj.__proto__ == Fn.prototype;\r\n  // 如果Fn返回的是一个对象类型, 那返回的就不再是obj, 而是Fn返回的对象\r\n  // 否则返回obj\r\n  return result instanceof Object ? result : obj;\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/pub-sub/index.js":
/*!******************************!*\
  !*** ./src/pub-sub/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PubSub\": () => (/* binding */ PubSub)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 21:21:04\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-28 00:03:56\r\n */\r\nconst PubSub = {\r\n  //创建唯一id\r\n  id: 1,\r\n  //频道与回调保存的容器\r\n  callbacks: {},\r\n};\r\n\r\n//订阅频道\r\nPubSub.subscribe = function (channel, callback) {\r\n  //创建唯一的编号\r\n  let token = 'token_' + this.id++;\r\n  //判断 callbacks 属性中是否存在 pay\r\n  if (this.callbacks[channel]) {\r\n    this.callbacks[channel][token] = callback;\r\n  } else {\r\n    this.callbacks[channel] = {\r\n      [token]: callback,\r\n    };\r\n  }\r\n  // 返回token\r\n  return token;\r\n};\r\n\r\n//发布消息\r\nPubSub.publish = function (channel, data) {\r\n  //获取当前频道中所有的回调\r\n  if (this.callbacks[channel]) {\r\n    Object.values(this.callbacks[channel]).forEach((callback) => {\r\n      //执行回调\r\n      callback(data);\r\n    });\r\n  }\r\n};\r\n\r\n/*\r\n4. 取消消息订阅\r\n  1). 没有传值, flag为undefined\r\n  2). 传入token字符串\r\n  3). msgName字符串\r\n*/\r\nPubSub.unsubscribe = function (flag) {\r\n  // 如果flag没有指定或者为null, 取消所有\r\n  if (flag === undefined) {\r\n    this.callbacks = {};\r\n  } else if (typeof flag === 'string') {\r\n    // flag是token\r\n    if (flag.indexOf('token_') === 0) {\r\n      // 找到flag对应的callbacks\r\n      const callbacks = Object.values(this.callbacks).find((callbacks) =>\r\n        callbacks.hasOwnProperty(flag)\r\n      );\r\n      // 如果存在, 删除对应的属性\r\n      if (callbacks) {\r\n        delete callbacks[flag];\r\n      }\r\n    } else {\r\n      // flag是msgName\r\n      delete this.callbacks[flag];\r\n    }\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://Mutils/./src/pub-sub/index.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => (/* binding */ reverseString),\n/* harmony export */   \"palindrome\": () => (/* binding */ palindrome)\n/* harmony export */ });\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: by_mori\r\n * @Date: 2021-09-27 18:55:20\r\n * @LastEditors: by_mori\r\n * @LastEditTime: 2021-09-27 23:58:47\r\n */\r\nfunction reverseString(str) {\r\n  //将字符串转为数组\r\n  //   let arr = str.split('');\r\n  let arr = [...str];\r\n  //翻转数组\r\n  arr.reverse();\r\n  //将数组拼接成字符串\r\n  let s = arr.join('');\r\n  return s;\r\n}\r\n\r\nfunction palindrome(str) {\r\n  return reverseString(str) === str;\r\n}\r\n\r\nfunction truncate(str, size, Omit = '...') {\r\n  return str.slice(0, size) + Omit;\r\n}\r\n\n\n//# sourceURL=webpack://Mutils/./src/string/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});