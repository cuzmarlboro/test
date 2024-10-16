/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-18 14:58:10
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-09-23 18:54:33
 * @FilePath: /mbti-match/src/service/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import Taro from '@tarojs/taro';
import storage from '@/utils/storage';

const { getStorage } = storage;

const request = async (url, method, data, header = {}) => {
  const token = await getStorage('token');

  const option = {
    url: `${process.env.TARO_APP_API_PREFIX}${url}`,
    method,
    data,
    header: { token, ...header }
  };

  const res = await Taro.request(option);

  return res.data;
};

export default request;
