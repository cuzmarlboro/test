import { View, Text, Image } from '@tarojs/components'
import { useDidShow, navigateTo } from '@tarojs/taro'
import { useState } from 'react'

import addImg from '@img/index/add.png'
import tipsImg from '@img/index/tips.png'
import oldImg from '@img/index/old.png'

import storage from '@utils/storage'
import { colors, levelTxt } from '@data/level'

import './index.scss'

export default function Relationship({ isShow }) {
  const [my, setMy] = useState('')
  const [other, setOther] = useState('')
  const [list, setList] = useState([])
  const [isShowTip, setIsShowTip] = useState(false)
  const [isShowOld, setIsShowOld] = useState(false)

  useDidShow(async () => {
    // 如果自己没选直接跳到选择页
    storage.my
      .get()
      .then(data => {
        if (data) {
          storage[data].get().then(res => {
            setList(res || [])
            console.log(res, 99)
          })
          setMy(data)
        } else {
          setMy([])
          handleClickWrite('my')
        }
      })
      .catch(() => {
        setMy([])
        handleClickWrite('my')
      })

    storage.other.get().then(setOther)
  })

  const handleClickWrite = storageType =>
    navigateTo({ url: `/pages/write/index?storageType=${storageType}` })

  const handleItem = ({ my: _my, other: _other }) =>
    navigateTo({ url: `/pages/detail/index?my=${_my}&other=${_other}` })

  return (
    <View className={`relationship ${isShow ? '' : 'hide'}`}>
      <View className='relationship-title'>
        <Text>要匹配的性格</Text>
        <View
          className='relationship-title__btn'
          onClick={() => setIsShowOld(true)}
        >
          其他版本
        </View>
      </View>
      <View className='relationship-select'>
        <View
          className='relationship-select__item'
          onClick={() => handleClickWrite('my')}
        >
          {my ? (
            <View className='relationship-select__box'>
              <View className='relationship-select__title'>{my}</View>
              <View className='relationship-select__sub'>自己</View>
            </View>
          ) : (
            <Image className='relationship-select__add' src={addImg} />
          )}
        </View>
        <View className='relationship-select__center'>&</View>
        <View
          className='relationship-select__item'
          onClick={() => handleClickWrite('other')}
        >
          {other ? (
            <View className='relationship-select__box'>
              <View className='relationship-select__title'>{other}</View>
              <View className='relationship-select__sub'>你要匹配的</View>
            </View>
          ) : (
            <Image className='relationship-select__add' src={addImg} />
          )}
        </View>
      </View>

      <View className='history'>
        <View className='history-title'>
          <View className='history-title__txt'>匹配历史</View>
          <View
            className='history-title__right'
            onClick={() => setIsShowTip(true)}
          >
            <Image className='history-title__tips' src={tipsImg} />

            {colors.map(color => (
              <View
                key={color}
                className='history-title__circle'
                style={{ backgroundColor: color }}
              ></View>
            ))}
          </View>
        </View>

        <View className='history-list'>
          {list.map((v, i) => (
            <View
              key={`${i}-${v.other}`}
              className='history-item'
              onClick={() => handleItem(v)}
            >
              <View className='history-item__left'>
                <View className='history-item__title'>
                  <Text className='history-item__title_green'>&</Text>
                  {v.other} - {v.matchName}
                </View>

                {v.detail.map((item, key) => (
                  <View
                    key={`${i}-${v.other}-${key}`}
                    className='history-item__detail'
                  >
                    {item}
                  </View>
                ))}
              </View>

              <View
                className='history-item__right'
                style={{ background: v.color }}
              ></View>
            </View>
          ))}

          {!list.length ? (
            <View className='history-list__empty'>暂无数据，请先去匹配</View>
          ) : (
            ''
          )}
        </View>
      </View>

      <View
        className={`tips ${isShowTip ? '' : 'hide'}`}
        onClick={() => setIsShowTip(false)}
      >
        <View className='tips-content'>
          <View className='tips-title'>仅强调亲密关系，日常相处无需参考</View>
          <View className='tips-main'>
            {colors.map((v, i) => (
              <View key={`${v}-${i}`} className='tips-main__item'>
                <Text className='tips-main__item_txt'>{levelTxt[i]}</Text>
                <View
                  className='tips-main__item_circle'
                  style={{ backgroundColor: v }}
                ></View>
              </View>
            ))}
          </View>
          <View className='tips-footer'>
            Reference：感谢{' '}
            <Text className='tips-footer__green'>Lofter@何肆铘</Text>{' '}
            整理的MBTI各类组合名称
          </View>
        </View>
      </View>

      <View
        className={`tips tips-old ${isShowOld ? '' : 'hide'}`}
        onClick={() => setIsShowOld(false)}
      >
        <View className='tips-content'>
          <View className='tips-title'>流传较多的第二个版本</View>
          <Image className='tips-img' src={oldImg} />
          <View className='tips-footer'>
            Reference：来源于Dan
            Johnston的抽样问卷调研数据，无具体理论来源。但因最早提出而广为流传，故贴出以供参考。
          </View>
        </View>
      </View>
    </View>
  )
}
