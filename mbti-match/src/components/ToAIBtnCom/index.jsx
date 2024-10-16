/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-09-19 00:15:17
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-09-29 23:50:45
 * @FilePath: /mbti-match/src/components/ToAIBtnCom/index.jsx
 * @Description: 跳转 ai 按钮
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Animate } from '@nutui/nutui-react-taro';
import useToNativeRoute from '@/hooks/useToNativeRoute';
import { TOAIBTN_TEXT_MAP, IS_SHOW_BACKBTN_LIST, APP_ENVS } from './const';
import getSourceUrl from './utils/getSourceUrl';
import ToAIBtn from './components/ToAIBtn';
import BackBtn from './components/BackBtn';
import './index.scss';

const ToAIBtnCom = ({ themeColor, mbti }) => {
  const toNativeRoute = useToNativeRoute();

  const { pathname } = Taro.getCurrentInstance().app.config.router;

  console.log('process.env.TARO_APP_ENV', process.env.TARO_APP_ENV);

  return APP_ENVS.includes(process.env.TARO_APP_ENV) ? (
    <Animate type='slide-bottom' className='toAIBtnCom'>
      <View className='toAIBtnCom_content'>
        {IS_SHOW_BACKBTN_LIST.includes(pathname) && <BackBtn themeColor={themeColor} />}
        <ToAIBtn
          text={TOAIBTN_TEXT_MAP.get(pathname)}
          onClick={() => {
            toNativeRoute('ai', '', getSourceUrl(mbti));
          }}
        />
      </View>
    </Animate>
  ) : null;
};

export default ToAIBtnCom;
