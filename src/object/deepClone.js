/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 18:17:07
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-27 18:53:11
 */
function deepClone1(target) {
  //通过数据创建 json 格式的字符串
  let str = JSON.stringify(target);
  // 将 josn 字符串创建为js数据
  let data = JSON.parse(str);
  return data;
}

function deepClone2(target) {
  //检测数据类型
  if (target !== null && typeof target === 'object') {
    //创建一个容器
    const cloneTarget = Array.isArray(target) ? [] : {};
    //遍历对象
    for (const key in target) {
      //检测该属性是否为对象本身的属性 不能拷贝原型对象的属性
      if (target.hasOwnProperty(key)) {
        //拷贝
        cloneTarget[key] = deepClone2(target[key]);
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}

function deepClone3(target, map = new Map()) {
  //检测数据类型
  if (target !== null && typeof target === 'object') {
    //克隆数据前 判断数据之前是否被克隆过
    let cache = map.get(target);
    if (cache) {
      return cache;
    }
    //创建一个容器
    const cloneTarget = Array.isArray(target) ? [] : {};
    //将新的结果存入到容器中
    map.set(target, cloneTarget);
    //遍历对象
    for (const key in target) {
      //检测该属性是否为对象本身的属性 不能拷贝原型对象的属性
      if (target.hasOwnProperty(key)) {
        //拷贝
        cloneTarget[key] = deepClone3(target[key], map);
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}

function deepClone4(target, map = new Map()) {
  //检测数据类型
  if (target !== null && typeof target === 'object') {
    //克隆数据前 判断数据之前是否被克隆过
    let cache = map.get(target);
    if (cache) {
      return cache;
    }

    //判断目标数据类型
    let isArray = Array.isArray(target);
    //创建一个容器
    const cloneTarget = isArray ? [] : {};
    //将新的结果存入到容器中
    map.set(target, cloneTarget);
    //如果目标数据为数组
    if (isArray) {
      // forEach 遍历
      target.forEach((item, index) => {
        cloneTarget[index] = deepClone4(item, map);
      });
    } else {
      Object.keys(target).forEach((key) => {
        cloneTarget[key] = deepClone4(target[key], map);
      });
    }

    return cloneTarget;
  } else {
    return target;
  }
}
