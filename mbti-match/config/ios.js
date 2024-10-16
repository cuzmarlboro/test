/* eslint-disable import/no-commonjs */
/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-04-19 18:00:10
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-09-22 04:56:45
 * @FilePath: /mbti-match/config/ios.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const { VersionPlugin } = require('../plugin/version-webpack-plugin.js');

export default {
  mini: {},
  h5: {
    publicPath: '/mbtiMatchIos', // 项目产出路径
    outputRoot: 'mbti_match_ios', // 项目产出目录
    webpackChain(chain) {
      chain.plugin('VersionPlugin').use(new VersionPlugin());
      return chain;
    }
  }
};
