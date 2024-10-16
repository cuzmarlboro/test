/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-26 19:15:55
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-09-30 16:01:13
 * @FilePath: /mbti-match/src/hooks/useToNativeRoute.js
 * @Description: 跳转原生页面
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { useAtomValue } from 'jotai';
import { tokenStorageAtom } from '@/model';

const OCTUPLE_TEST = 'octupleTest'; // 八维测试
const OCTUPLE_DETAILS = 'octupleDetails'; // 八维详情
const OCTUPLE_CALCULATOR = 'octupleCalculator'; // 八维计算器
const OCTUPLE_ANIMATION = 'octupleAnimation'; // 八维动画
const MATCH = 'match'; // 匹配
const BUYPRO = 'buyPro'; // 会员购买页
const AI = 'ai'; // ai

const CARD_TITLE_ROUTE_MAP = new Map([
  ['荣格八维流派', OCTUPLE_TEST],
  ['性格类型解读', OCTUPLE_DETAILS],
  ['八维结果分析', OCTUPLE_CALCULATOR],
  ['支持荣格斯、Totpyes上传', OCTUPLE_CALCULATOR],
  ['八维入门科普', OCTUPLE_ANIMATION],
  ['动画演示，关键词解读', OCTUPLE_ANIMATION],
  ['关系图鉴', MATCH],
  ['不同类型相处规律', MATCH],
  ['buyPro', BUYPRO],
  ['ai', AI]
]);

const PLATFORM_MAP = new Map([
  ['ios', 'iOS'],
  ['android', 'android'],
  ['ios-test', 'iOS'],
  ['android-test', 'android']
]);

const CHAT_PUBLICPATH_MAP = new Map([
  ['ios', '/chat'],
  ['android', '/chat'],
  ['ios-test', '/chatTest'],
  ['android-test', '/chatTest']
]);

const CHAT_PAGE_MAP = new Map([
  ['ios', '/pages/chat/index'],
  ['android', '/pages/chat/index'],
  ['ios-test', '/pages/chat2/index'],
  ['android-test', '/pages/chat2/index']
]);

const useToNativeRoute = () => {
  // token
  const tokenStorage = useAtomValue(tokenStorageAtom);

  return (title, mbti, sourceUrl = '') => {
    let url = '';
    switch (title) {
      case '荣格八维流派':
        url = `https://test.wikimbti.com/app/index.html?platform=${PLATFORM_MAP.get(
          process.env.TARO_APP_ENV
        )}&token=${tokenStorage}`;
        break;

      case '性格类型解读':
        url = `https://test.wikimbti.com/?from=watch#/pages/result/index?mbti=${mbti}`;
        break;

      case '支持荣格斯、Totpyes上传':
      case '八维结果分析':
        url = 'https://match.wikimbti.com/calculator';
        break;

      case '不同类型相处规律':
        url = 'https://match.wikimbti.com';
        break;

      case '关系图鉴':
        url = `https://match.wikimbti.com/#/pages/detail/index?my=${mbti.split(',')[0]}&other=${
          mbti.split(',')[1]
        }`;
        break;
      case '动画演示，关键词解读':
        break;
      case '八维入门科普':
        url = `https://match.wikimbti.com/#/pages/index/index?type=explain&mbti=${mbti || 'XXXX'}`;
        break;
      case 'ai':
        if (tokenStorage) {
          url = `https://match.wikimbti.com${CHAT_PUBLICPATH_MAP.get(
            process.env.TARO_APP_ENV
          )}/#${CHAT_PAGE_MAP.get(
            process.env.TARO_APP_ENV
          )}?&token=${tokenStorage}&platform=${PLATFORM_MAP.get(
            process.env.TARO_APP_ENV
          )}&sourceUrl=${sourceUrl}`;
        } else {
          url = `https://match.wikimbti.com${CHAT_PUBLICPATH_MAP.get(
            process.env.TARO_APP_ENV
          )}/#${CHAT_PAGE_MAP.get(process.env.TARO_APP_ENV)}?&platform=${PLATFORM_MAP.get(
            process.env.TARO_APP_ENV
          )}&sourceUrl=${sourceUrl}`;
        }
        break;
      default:
        break;
    }
    console.log('url', url);
    if (['ios', 'ios-test'].includes(process.env.TARO_APP_ENV)) {
      window.webkit.messageHandlers.JumpToPage.postMessage({
        page: CARD_TITLE_ROUTE_MAP.get(title),
        url
      });
    }

    if (['android', 'android-test'].includes(process.env.TARO_APP_ENV)) {
      let bottomCompose = '';
      let isAddCommonParameter = true;
      if (title === BUYPRO) url = '/membership/Membership';
      if (title === AI) {
        bottomCompose = 'input';
        isAddCommonParameter = false;
      }

      window.MbtiWikiJsInterface.routerToNative(
        JSON.stringify({ path: url, title, bottomCompose, isAddCommonParameter })
      );
    }
  };
};

export default useToNativeRoute;
