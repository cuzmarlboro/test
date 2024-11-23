/* eslint-disable no-unused-vars */
import { View, Image, Text } from '@tarojs/components';
import { useLoad, reLaunch, getCurrentInstance, setNavigationBarTitle } from '@tarojs/taro';
import { useState } from 'react';

import backImg from '@img/detail/back.png';
import rightImg from '@img/detail/right.png';

import config from '@config';
import relationship, { relationshipName } from '@data/relationship';
import level from '@data/level';
import dimensions from '@data/dimensions';

import { ToAIBtnCom } from '@/components';

import './index.scss';

export default function Detail() {
  const $instance = getCurrentInstance();
  const { my, other, type } = $instance.router.params;
  const [matchData, setMatchData] = useState({});

  useLoad(() => {
    console.log('Page loaded.');

    let matchKey = '31';
    if (relationship[my] && relationship[my][other]) {
      matchKey = relationship[my][other];
    }

    let matchName = '';
    if (relationshipName[my] && relationshipName[my][other]) {
      matchName = relationshipName[my][other];
    }

    const _matchData = level[matchKey] || {};

    const myDimensions = dimensions[my];
    const otherDimensions = dimensions[other];

    setNavigationBarTitle({ title: matchName });

    setMatchData({
      matchKey,
      matchName,
      color: _matchData.color,
      detail: _matchData.detail,
      mySub: `${myDimensions[0]}-${myDimensions[1]}`,
      otherSub: `${otherDimensions[0]}-${otherDimensions[1]}`,
      myDimensions,
      otherDimensions
    });
  });

  // eslint-disable-next-line no-shadow
  const handleToTest = type => {
    window.location.href = `${config.test_mbti}?from=match#/pages/result/index?mbti=${type}`;
  };

  if (!matchData.matchKey) return '';

  return (
    <View className='page-detail'>
      {/* <ToAIBtnCom themeColor='#65d0a9' /> */}

      <View className='box mt-0'>
        <View className='box-title'>关系简介</View>
        <View className='box-p box-gray'>注：考虑八维前需要优先考虑认知水平的对等</View>

        {!matchData.detail.colorTxt
          ? ''
          : matchData.detail.colorTxt.map((v, i) => (
              <View key={`colorTxt-${i}`} className='box-p' style={{ color: v.color }}>
                {v.txt}
              </View>
            ))}

        {!matchData.detail.otherTxt
          ? ''
          : matchData.detail.otherTxt.map((v, i) => (
              <View key={`otherTxt-${i}`} className={`box-p ${i === 0 ? 'pt-40' : ''}`}>
                {v}
              </View>
            ))}
      </View>

      <View className='header'>
        <View className='header-item' onClick={() => handleToTest(my)}>
          <View className='header-item__left'>
            <View className='header-item__left_title'>{my}</View>
            <View className='header-item__left_sub'>{matchData.mySub}</View>
          </View>
          <Image className='header-item__icon' src={rightImg} />
        </View>
        <View className='header-center' style={{ backgroundColor: matchData.color }}></View>
        <View className='header-item' onClick={() => handleToTest(other)}>
          <View className='header-item__left'>
            <View className='header-item__left_title'>{other}</View>
            <View className='header-item__left_sub'>{matchData.otherSub}</View>
          </View>
          <Image className='header-item__icon' src={rightImg} />
        </View>
      </View>

      <View className={`dimensions dimensions-${matchData.matchKey}`}>
        <View className='dimensions-box dimensions-box-my'>
          {matchData.myDimensions.map(v => (
            <View key={`my-${v}`} className='dimensions-box__item'>
              {v}
            </View>
          ))}
        </View>

        {matchData.matchKey == 31 ? (
          <View className='dimensions-img asd'></View>
        ) : (
          <Image
            className='dimensions-img'
            src={require(`@img/relationship/${matchData.matchKey}.png`)}
          />
        )}

        <View className='dimensions-box dimensions-box-other'>
          {matchData.otherDimensions.map(v => (
            <View key={`other-${v}`} className='dimensions-box__item'>
              {v}
            </View>
          ))}
        </View>
      </View>

      <View className='box'>
        <View className='box-title'>建立健康关系</View>
        <View className='box-p'>
          思考：彼此花时间了解自己在关系中的需求。在这个关系中，我是否感到满足？
          <Text className='box-b'>过去的思考惯性是否影响了两个人之间的相处？</Text>
        </View>
        <View className='box-p pt-40'>
          疗愈：共同创建一个安全的心理环境，
          <Text className='box-b'>修复过去的伤痛和创伤，互相支持促进情感完善。</Text>
          「我察觉到你有些不舒服，有什么事情困扰着你吗？我会在这里支持你。」
        </View>
        <View className='box-p pt-40'>
          成长：
          <Text className='box-b'>相互鼓励个人发展，追求目标，致力于个人完整性，</Text>
          营造出愉悦、和谐、平静和启迪的氛围。这会促使你们之间关系的蓬勃发展。
        </View>
      </View>

      {!['ios', 'android', 'ios-test', 'android-test'].includes(process.env.TARO_APP_ENV) &&
        type !== 'ipa' && (
          <View className='footer'>
            <View className='back' onClick={() => reLaunch({ url: '/pages/index/index' })}>
              <Image className='back_icon' src={backImg} />
              回首页
            </View>
          </View>
        )}
    </View>
  );
}
