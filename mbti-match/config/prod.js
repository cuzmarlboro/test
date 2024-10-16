/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-15 21:43:08
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-09-22 04:59:44
 * @FilePath: /mbti-match/config/prod.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const { VersionPlugin } = require('../plugin/version-webpack-plugin.js');

export default {
  mini: {},
  h5: {
    publicPath: '/',
    outputRoot: 'mbti_match',
    webpackChain(chain) {
      chain.plugin('VersionPlugin').use(new VersionPlugin());
      return chain;
    }
  }
};
