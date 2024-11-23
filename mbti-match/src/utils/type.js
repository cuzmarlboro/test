/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2023-08-31 17:52:56
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-10-10 18:57:09
 * @FilePath: /mbti-ipa/src/utils/type.js
 * @Description:
 */
/** 基本数据类型判断模块 */

const isString = params => Object.prototype.toString.call(params).slice(8, -1) === 'String';

const isNumber = params => Object.prototype.toString.call(params).slice(8, -1) === 'Number';

const isBoolean = params => Object.prototype.toString.call(params).slice(8, -1) === 'Boolean';

const isNull = params => Object.prototype.toString.call(params).slice(8, -1) === 'Null';

const isUndefined = params => Object.prototype.toString.call(params).slice(8, -1) === 'Undefined';

const isBigInt = params => Object.prototype.toString.call(params).slice(8, -1) === 'BigInt';

const isSymbol = params => Object.prototype.toString.call(params).slice(8, -1) === 'Symbol';

/** 引用数据类型判断模块 */

const isObject = params => Object.prototype.toString.call(params).slice(8, -1) === 'Object';

const isArray = params => Object.prototype.toString.call(params).slice(8, -1) === 'Array';

const isFunction = params => Object.prototype.toString.call(params).slice(8, -1) === 'Function';

export {
  isString,
  isNumber,
  isBoolean,
  isNull,
  isUndefined,
  isBigInt,
  isSymbol,
  isObject,
  isArray,
  isFunction
};
