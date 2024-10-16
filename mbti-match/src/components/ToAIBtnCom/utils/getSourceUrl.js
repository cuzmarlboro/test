/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-09-22 04:28:13
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-09-24 00:32:10
 * @FilePath: /mbti-match/src/components/ToAIBtnCom/utils/getSourceUrl.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import Taro from '@tarojs/taro';
import { getUrlParams } from '@/utils/url';
import { PUBLICPATH_MAP } from '../const';

const getSourceUrl = mbti => {
  const { pathname } = Taro.getCurrentInstance().app.config.router;

  if (pathname === '/pages/chance/index') {
    return `https://match.wikimbti.com${
      PUBLICPATH_MAP.get(pathname)[process.env.TARO_APP_ENV]
    }/#/pages/chance/index?marksData=${getUrlParams('marksData')}&type=${getUrlParams('type')}`;
  }

  if (pathname === '/pages/detail/index') {
    return `https://match.wikimbti.com${
      PUBLICPATH_MAP.get(pathname)[process.env.TARO_APP_ENV]
    }/#/pages/detail/index?my=${getUrlParams('my')}&other=${getUrlParams('other')}`;
  }

  if (pathname === '/pages/index/index') {
    return `https://match.wikimbti.com${
      PUBLICPATH_MAP.get(pathname)[process.env.TARO_APP_ENV]
    }/#/pages/index/index?mbti=${mbti}`;
  }

  if (pathname === '/pages/result/index') {
    return `https://test.wikimbti.com${
      PUBLICPATH_MAP.get(pathname)[process.env.TARO_APP_ENV]
    }/#/pages/result/index?from=watch&mbti=${mbti}`;
  }

  return '';
};

export default getSourceUrl;
