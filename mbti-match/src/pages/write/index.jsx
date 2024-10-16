import { View, Image, Text } from '@tarojs/components'
import {
  navigateBack,
  useLoad,
  getCurrentInstance,
  redirectTo,
  getApp
} from '@tarojs/taro'
import { useState, useMemo } from 'react'

import h5Img from '@img/write/h5.png'
import rightImg from '@img/write/right.png'

import config from '@config'
import storage from '@utils/storage'
import utils from '@utils'
import relationship, { relationshipName } from '@data/relationship'
import level from '@data/level'

import './index.scss'

const TYPELIST = [
  ['E', 'I'],
  ['N', 'S'],
  ['T', 'F'],
  ['P', 'J']
]

export default function Write() {
  const $instance = getCurrentInstance()
  const { storageType } = $instance.router.params

  const [my, setMy] = useState('')
  const [other, setOther] = useState('')
  const [type, setType] = useState([])
  const isOk = useMemo(() => type.filter(v => !!v).length === 4, [type])

  useLoad(() => {
    console.log('Page loaded.')
    storage.my.get().then(setMy)
    storage.other.get().then(setOther)
  })

  const handleClickItem = (idx, val) => {
    const arr = [...type]
    arr[idx] = val
    setType(arr)
  }

  const handleAdv = () => {
    window.location.href = config.test_mbti
  }

  const handleOk = () => {
    if (!isOk) return
    const data = type.join('')

    if (storageType === 'explain') {
      getApp().explain_mbti = data
      return navigateBack()
    }

    if (storageType === 'my' && other) {
      return handleDetail(data, other)
    }
    if (storageType === 'other' && my) {
      return handleDetail(my, data)
    }

    storage[storageType].set(data)
    navigateBack()
  }

  const handleDetail = async (_my, _other) => {
    let matchKey = '31'
    if (relationship[_my] && relationship[_my][_other]) {
      matchKey = relationship[_my][_other]
    }

    let matchName = ''
    if (relationshipName[_my] && relationshipName[_my][_other]) {
      matchName = relationshipName[_my][_other]
    }

    const matchData = level[matchKey] || {}
    const data = {
      my: _my,
      other: _other,
      matchKey,
      matchName,
      detail: matchData.list,
      color: matchData.color
    }
    storage[_my]
      .get()
      .then(res => {
        if (Array.isArray(res)) {
          res.unshift(data)
        } else {
          res = [data]
        }
        saveAndJump(res, _my, _other)
      })
      .catch(() => {
        saveAndJump([data], _my, _other)
      })
  }

  const saveAndJump = (data, _my, _other) => {
    storage.other.set()
    storage[_my].set(utils.removeDuplicates(data, 'other').slice(0, 16))
    redirectTo({ url: `/pages/detail/index?my=${_my}&other=${_other}` })
  }

  return (
    <View
      className={`page-write ${
        storageType === 'explain' ? 'page-write__explain' : ''
      }`}
    >
      <View className='title'>
        填写你{storageType === 'other' ? '要匹配' : ''}
        {storageType === 'explain' ? '要查询' : ''}的性格
      </View>

      <View className='select'>
        {TYPELIST.map((v, i) => (
          <View key={`select-box_${i}`} className='select-box'>
            {v.map(item => (
              <View
                key={item}
                className={`select-item ${
                  type[i] === item ? 'select-item__act' : ''
                }`}
                onClick={() => handleClickItem(i, item)}
              >
                {item}
              </View>
            ))}
          </View>
        ))}
      </View>

      <View className='adv' onClick={handleAdv}>
        <View className='adv-left'>
          <Image className='adv-logo' src={h5Img} />
          <Text className='adv-txt'>不知道自己的性格？去测试</Text>
        </View>
        <Image className='adv-right' src={rightImg} />
      </View>

      <View className={`btn ${isOk ? 'btn-act' : ''}`} onClick={handleOk}>
        确认
      </View>
    </View>
  )
}
