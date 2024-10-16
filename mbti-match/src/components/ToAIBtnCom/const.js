/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-09-19 13:24:21
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-10-08 10:59:32
 * @FilePath: /mbti-match/src/components/ToAIBtnCom/const.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const TOAIBTN_TEXT_MAP = new Map([
  ['/pages/chance/index', '还不确信自己的类型？在这提问'],
  ['/pages/detail/index', '关系相处有疑惑？在这提问'],
  ['/pages/index/index', '对八维功能有疑惑？在这提问'],
  ['/pages/result/index', '对性格解读有困惑？在这提问']
]);

const PUBLICPATH_MAP = new Map([
  [
    '/pages/chance/index',
    {
      ios: '/calculatorIos',
      android: '/calculatorAndroid',
      'ios-test': '/calculatorIosTest',
      'android-test': '/calculatorAndroidTest'
    }
  ],
  [
    '/pages/detail/index',
    {
      ios: '/mbtiMatchIos',
      android: '/mbtiMatchAndroid',
      'ios-test': '/mbtiMatchIosTest',
      'android-test': '/mbtiMatchAndroidTest'
    }
  ],
  [
    '/pages/index/index',
    {
      ios: '/mbtiMatchIos',
      android: '/mbtiMatchAndroid',
      'ios-test': '/mbtiMatchIosTest',
      'android-test': '/mbtiMatchAndroidTest'
    }
  ],
  [
    '/pages/result/index',
    {
      ios: '/octupleIos',
      android: '/octupleAndroid',
      'ios-test': '/octupleIosTest',
      'android-test': '/octupleAndroidTest'
    }
  ]
]);

const IS_SHOW_BACKBTN_LIST = ['/pages/chance/index', '/pages/detail/index'];

const APP_ENVS = ['ios', 'android', 'ios-test', 'android-test'];

export { TOAIBTN_TEXT_MAP, PUBLICPATH_MAP, IS_SHOW_BACKBTN_LIST, APP_ENVS };
