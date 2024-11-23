/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-18 16:52:58
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-10-24 10:49:29
 * @FilePath: /mbti-match/src/utils/url.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import Taro from '@tarojs/taro';

/**
 * 通过 key 获取 当前url 参数
 * @param {*} key
 * @return {*}
 */
const getUrlParams = key => {
  let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
  let r = window.location.search.slice(1).match(reg);
  if (r != null) return decodeURI(r[2]);

  const { params } = Taro.getCurrentInstance().router;
  if (key in params) return params[key];

  return null;
};

/**
 * 通过 key 获取某个 url 的参数
 * @param {*} key
 * @param {*} url
 * @return {*}
 */
const getUrlParams2 = (url, key) => {
  let urlStr = url.split('?')[1];
  if (!urlStr) return null;
  if (url.includes('from')) {
    urlStr = url.split('?')[2];
  }
  const urlSearchParams = new URLSearchParams(urlStr);
  const result = Object.fromEntries(urlSearchParams.entries());
  return result[key] || null;
};

export { getUrlParams, getUrlParams2 };
