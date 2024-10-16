/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-06-19 14:34:06
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-09-30 16:26:52
 * @FilePath: /mbti-match/src/app.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { tokenStorageAtom } from '@/model';
import { getUrlParams } from '@/utils/url';
import { APP_ENVS } from '@/components/ToAIBtnCom/const';
import '@nutui/nutui-react-taro/dist/style.css';
import './app.scss';

function App({ children }) {
  const setTokenStorage = useSetAtom(tokenStorageAtom);

  useEffect(() => {
    const token = getUrlParams('token');
    if (APP_ENVS.includes(process.env.TARO_APP_ENV) && token) {
      setTokenStorage(token);
    }
    if (APP_ENVS.includes(process.env.TARO_APP_ENV) && !token) {
      setTokenStorage('');
    }
  }, []);
  return children;
}

export default App;
