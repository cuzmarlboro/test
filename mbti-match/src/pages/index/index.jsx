/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-06-19 14:34:06
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-07-15 20:35:08
 * @FilePath: /character_mbti/src/pages/index/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { View } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
import { useState } from 'react'

import Relationship from './components/relationship'
import Explain from './components/explain'
import Nav from './components/nav'

import './index.scss'

export default function Index() {
  const $instance = getCurrentInstance()
  const { mbti } = $instance.router.params

  const [active, setActive] = useState(mbti ? 1 : 0)

  return (
    <View className='page-index'>
      {!mbti && <Relationship isShow={active === 0} />}
      <Explain isShow={active === 1} mbti={mbti === 'XXXX' ? '' : mbti} />
      {!mbti && <Nav active={active} onChange={setActive} />}
    </View>
  )
}
