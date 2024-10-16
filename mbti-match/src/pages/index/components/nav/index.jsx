import { View, Text, Image } from '@tarojs/components'

import relationshipImg from '@img/index/nav/relationship.png'
import relationshipActImg from '@img/index/nav/relationship-act.png'
import explainImg from '@img/index/nav/explain.png'
import explainActImg from '@img/index/nav/explain-act.png'

import './index.scss'

export default function Nav({ active, onChange }) {
  return (
    <View className='comp-nav'>
      <View
        className={`comp-nav__item ${active === 0 ? 'comp-nav__item_act' : ''}`}
        onClick={() => onChange(0)}
      >
        <Image
          className='comp-nav__item_img'
          src={active === 0 ? relationshipActImg : relationshipImg}
        />
        <Text className='comp-nav__item_txt'>关系</Text>
      </View>

      <View
        className={`comp-nav__item ${active === 1 ? 'comp-nav__item_act' : ''}`}
        onClick={() => onChange(1)}
      >
        <Image
          className='comp-nav__item_img'
          src={active === 1 ? explainActImg : explainImg}
        />
        <Text className='comp-nav__item_txt'>八维功能</Text>
      </View>
    </View>
  )
}
