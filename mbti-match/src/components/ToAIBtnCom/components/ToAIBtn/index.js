/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-09-19 13:27:54
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-09-19 13:37:49
 * @FilePath: /mbti-counter/src/components/ToAIBtnCom/components/ToAIBtn/index.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { View } from '@tarojs/components';
import './index.scss';

const ToAIBtn = ({ text, onClick }) => {
  return (
    <View className='toAIBtn' onClick={onClick}>
      {text}
    </View>
  );
};

export default ToAIBtn;
