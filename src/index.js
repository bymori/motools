/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-09-27 23:01:09
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-28 00:04:26
 */

//array
export { chunk } from './array/chunk';
export { concat, slice } from './array/concat';
export {map,reduce,filter,find,findIndex,every,some} from './array/declares';
export { difference } from './array/difference';
export { drop,dropRight } from './array/drop';
export { flatten1,flatten2 } from './array/flatten';
export { pull,pullAll } from './array/pull';
export { unique,unique2,unique3 } from './array/unique';

//axios
export { axios } from './axios/index';

//event-bind
export { addEventListene } from './event-bind/index';

//event-bus
export { eventBus } from './event-bus/index';

//function
export { apply } from './function/apply';
export { call } from './function/call';
export { bind } from './function/bind';
export { debounce } from './function/debounce';
export { throttle } from './function/throttle';

// object
export { clone1,clone2 } from './object/clone';
export { deepClone1,deepClone2,deepClone3,deepClone4 } from './object/deepClone';
export { mergeObject } from './object/mergeObject';
export { myInstanceOf } from './object/myInstanceOf';
export { newInstance } from './object/newInstance';

// pub-sub
export { PubSub } from './pub-sub/index';

// string
export { reverseString,palindrome } from './string/index';