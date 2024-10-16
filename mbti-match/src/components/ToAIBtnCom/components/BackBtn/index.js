/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-09-19 13:31:07
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-09-23 19:19:12
 * @FilePath: /mbti-match/src/components/ToAIBtnCom/components/BackBtn/index.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Image } from '@nutui/nutui-react-taro';
import leftPng from '../../assets/left.png';
import './index.scss';

const BackBtn = ({ themeColor }) => {
  return (
    <View
      className='backBtn'
      style={{ backgroundColor: themeColor }}
      onClick={() => Taro.navigateBack()}
    >
      <Image src={leftPng} loading={false} height='24px' width='24px' />
    </View>
  );
};

export default BackBtn;
