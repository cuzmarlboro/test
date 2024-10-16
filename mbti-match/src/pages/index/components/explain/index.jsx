import { useAtomValue } from 'jotai';
import { tokenStorageAtom } from '@/model';
import { View, Text, Image } from '@tarojs/components';
import { useState, useMemo, useRef, useEffect } from 'react';
import { useDidShow, navigateTo, getApp } from '@tarojs/taro';

import { getUserInfo as getUserInfoAsync } from '@/service/user';

import lottie from 'lottie-web';
import { ToAIBtnCom } from '@/components';

import downImg from '@img/index/down.png';
import rightImg from '@img/index/right.png';
import seGif from '@assets/animation/Se.gif';

import allMbti from '@data/allmbti';
import dimensions from '@data/dimensions';
import dimensionsIntroduce from '@data/dimensions-introduce';
import dimensionsLocation from '@data/dimensions-location';

import './index.scss';

export default function Explain({ isShow, mbti: propsMbti }) {
  const tokenStorage = useAtomValue(tokenStorageAtom);

  const [mbti, setMbti] = useState(propsMbti === 'XXXX' || !propsMbti ? 'ENTP' : propsMbti);
  // 当前选中的下标
  const [actEightIdx, setActEightIdx] = useState(0);

  // 八维顺序
  const eight = useMemo(() => dimensions[mbti] || [], [mbti]);

  // 当前选中的八维
  const actEight = useMemo(() => {
    return eight[actEightIdx] || 'Te';
  }, [eight, actEightIdx]);

  const [actTab, setActTab] = useState(-1);

  // 解读
  const location = useMemo(() => dimensionsLocation[actEightIdx + 1] || {}, [actEightIdx]);

  // 功能简介
  const introduce = useMemo(() => dimensionsIntroduce[actEight] || {}, [actEight]);

  // 动画
  const lottieRef = useRef(null);
  const [lottieObj, setLottieObj] = useState(null);
  useEffect(() => {
    if (lottieObj) lottieObj.destroy();
    if (actEight === 'Se') return;
    const _lottieObj = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      animationData: require(`@assets/animation/${actEight}.json`)
    });
    setLottieObj(_lottieObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actEight]);

  useEffect(() => {
    setActTab(mbti !== 'XXXX' ? 0 : 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDidShow(() => {
    const nowMbti = getApp().explain_mbti || propsMbti || allMbti[0];
    if (nowMbti === mbti) return;
    setMbti(nowMbti);
    setActEightIdx(0);
  });

  const getUserInfo = async () => {
    const { data } = await getUserInfoAsync();
    setMbti(data.mbti || 'ENTP');
  };

  useEffect(() => {
    if (tokenStorage) getUserInfo();
  }, [tokenStorage]);

  const handleToSelect = () => navigateTo({ url: `/pages/write/index?storageType=explain` });

  const renderLocation = () => (
    <View className={`explain-location ${actTab === 0 ? '' : 'hide'}`}>
      <View className='explain-location__title'>{location.name}</View>
      <View className='explain-location__b'>{location.bold}</View>
      {location.normal.map((v, i) => (
        <View key={`location_${actEightIdx}_${i}`} className='explain-location__p'>
          {v}
        </View>
      ))}
    </View>
  );

  const renderIntroduce = () => {
    const arr = introduce.tags || [];
    const tags = [];
    arr.forEach(v => {
      tags.push(v);
      tags.push('right');
    });
    tags.pop();

    return (
      <View className={`explain-introduce ${actTab === 1 ? '' : 'hide'}`}>
        <View className='explain-introduce__tags'>
          {tags.map((v, i) =>
            v === 'right' ? (
              <Image
                key={`tags_img_${actEight}-${i}`}
                className='explain-introduce__tags_right'
                src={rightImg}
              />
            ) : (
              <View key={`tags_${actEight}-${v.value}`} className='explain-introduce__tags_item'>
                <View className='explain-introduce__tags_label'>{v.label}</View>
                <View className='explain-introduce__tags_value'>{v.value}</View>
              </View>
            )
          )}
        </View>

        <View className='explain-introduce__box'>
          {/* <View className='explain-introduce__box_b'>{introduce.bold}</View> */}

          {introduce.normal &&
            introduce.normal.map((v, i) => (
              <View
                key={`normal_${actEight}-${i}`}
                // className={
                //   i === 0
                //     ? 'explain-introduce__box_b'
                //     : 'explain-introduce__box_p'
                // }
                className='explain-introduce__box_p'
              >
                {v}
              </View>
            ))}
        </View>
      </View>
    );
  };

  return (
    <View className={`explain ${isShow ? '' : 'hide'}`}>
      <View className='explain-top' onClick={handleToSelect}>
        <Text className='explain-top__label'>人格类型：</Text>
        <Text className='explain-top__value'>{mbti}</Text>
        <Image className='explain-top__icon' src={downImg} />
      </View>

      {mbti !== 'XXXX' && <ToAIBtnCom themeColor='#65d0a9' mbti={mbti} />}

      <View className='explain-animation'>
        <View className='explain-animation__eight'>
          {eight.map((v, i) => (
            <View
              key={`${v}-${i}`}
              className={`explain-animation__eight_item ${
                i === actEightIdx ? 'explain-animation__eight_act' : ''
              }`}
              onClick={() => setActEightIdx(i)}
            >
              {v}
            </View>
          ))}
        </View>

        <View
          className={`explain-animation__box ${actEight === 'Se' ? 'hide' : ''}`}
          ref={lottieRef}
        ></View>

        <View className={`explain-animation__box ${actEight !== 'Se' ? 'hide' : ''}`}>
          <Image className='explain-animation__box_img' src={seGif} />
        </View>

        <View className='explain-animation__title'>{actEight}尝试到达目的地</View>
      </View>

      <View className={`explain-tabs ${mbti !== 'XXXX' ? '' : 'hide'}`}>
        <View
          className={`explain-tabs__item ${actTab === 0 ? 'explain-tabs__item_act' : ''}`}
          onClick={() => setActTab(0)}
        >
          {location.tabName}解读
        </View>
        <View
          className={`explain-tabs__item ${actTab === 1 ? 'explain-tabs__item_act' : ''}`}
          onClick={() => setActTab(1)}
        >
          {actEight}功能简介
        </View>
      </View>

      {renderLocation()}
      {renderIntroduce()}
    </View>
  );
}
