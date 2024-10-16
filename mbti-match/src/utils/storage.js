/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-15 21:43:08
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-09-22 03:21:25
 * @FilePath: /mbti-match/src/utils/storage.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import Taro from '@tarojs/taro';

import dimensions from '@data/dimensions';

const prefix = 'character';

function _getStorage(key) {
  return new Promise(resolve => {
    key = prefix + key;

    Taro.getStorage({
      key,
      success: res => resolve(res.data),
      fail: () => resolve()
    });
  });
}

function _setStorage(key, value) {
  key = prefix + key;

  Taro.setStorageSync(key, value);
}

function _storage(key) {
  return {
    set: data => _setStorage(key, data),
    get: () => _getStorage(key)
  };
}

const history = {};

Object.keys(dimensions).map(key => {
  history[key] = _storage(key);
});

const getStorage = key =>
  new Promise(resolve => {
    Taro.getStorage({
      key: `${process.env.TARO_APP_STORAGE_PREFIX}${key}`,
      success: res => resolve(res.data),
      fail: () => resolve('')
    });
  });

const setStorage = (key, value) =>
  new Promise(resolve => {
    Taro.setStorage({
      key: `${process.env.TARO_APP_STORAGE_PREFIX}${key}`,
      data: value,
      success: res => resolve(res.data),
      fail: () => resolve('')
    });
  });

const getStorageSync = key =>
  Taro.getStorageSync(`${process.env.TARO_APP_STORAGE_PREFIX}${key}`) || '';

const setStorageSync = (key, value) =>
  Taro.setStorageSync(`${process.env.TARO_APP_STORAGE_PREFIX}${key}`, value);

export default {
  my: _storage('my'),
  other: _storage('other'),
  list: _storage('list'),
  ...history,
  getStorage,
  setStorage,
  getStorageSync,
  setStorageSync
};
