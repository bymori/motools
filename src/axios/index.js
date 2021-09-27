/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 22:12:54
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 23:45:12
 */
export function axios({ url, method = 'GET', params = {}, data = {} }) {
  // 处理method(转大写)
  method = method.toUpperCase();
  // 返回一个promise对象
  return new Promise((resolve, reject) => {
    //创建异步对象
    var xhr = new XMLHttpRequest();
    //设置请求行open()
    // 处理params 对象
    let str = '';
    for (let k in params) {
      str += `${k}=${params[k]}&`;
    }
    str = str.slice(0, -1);
    xhr.open(method, url + '?' + str);
    //发送请求
    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
      //Content-type mime类型设置
      xhr.setRequestHeader('Content-type', 'application/json');
      //设置请求体
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
    //设置响应结果的类型为 JSON
    xhr.responseType = 'json';
    //处理结果
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status <= 299) {
          resolve({
            status: xhr.status,
            message: xhr.statusText,
            body: xhr.response,
          });
        } else {
          reject(new Error('请求失败, 失败的状态码为' + xhr.status));
        }
      }
    };
  });
}

axios.get = function (url, options) {
  //发送 AJAX 请求 GET
  let config = Object.assign(options, { method: 'GET', url: url });
  return axios(config);
};
axios.post = function (url, options) {
  //发送 AJAX 请求 POST
  let config = Object.assign(options, { method: 'POST', url: url });
  return axios(config);
};
axios.put = function (url, options) {
  //发送 AJAX 请求 PUT
  let config = Object.assign(options, { method: 'PUT', url: url });
  return axios(config);
};
axios.delete = function (url, options) {
  //发送 AJAX 请求 DELETE
  let config = Object.assign(options, { method: 'DELETE', url: url });
  return axios(config);
};
