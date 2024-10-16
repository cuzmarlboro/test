export const colors = [
  '#DC7B70',
  '#E2AF9F',
  '#E7ECD1',
  '#C4DAC6',
  '#A8E5AE',
  '#65D0A9'
]

export const levelTxt = [
  '互相get不到，可以再想想',
  '从吸引开始，而后易被忽视',
  '不算完美，中规中矩',
  '有很多方面合适',
  '可以建立很好的关系',
  '很强的化学反应，理想的匹配'
]

const level = {
  11: {
    color: colors[0],
    list: ['1功能互为对方的7位盲区', '相互Get不到'],
    detail: {
      colorTxt: [
        { color: '#DC7B70', txt: '1位功能是对方的7位盲区：内核被忽略' },
        { color: '#DC7B70', txt: '无法理解对方脑回路，相互无感。' }
      ],
      otherTxt: [
        '一般来说1功能和7功能互相为盲区很难产生相互的吸引力。如果双方真的开始了相处，常会因为对方不尊重自己的内心想法而感到挫败和失望。',
        '长久发展对双方成熟度的要求都非常高。'
      ]
    }
  },
  21: {
    color: colors[1],
    list: ['2位功能是对方的1位功能：被吸引', '相互Get不到'],
    detail: {
      colorTxt: [
        { color: '#65D0A9', txt: '2位功能是对方的1位功能：被吸引' },
        { color: '#DC7B70', txt: '1位功能是对方的7位盲区：内核被忽略' }
      ],
      otherTxt: [
        '从美丽的误认开始，长期相处内核被忽略的那一方会感觉得不到尊重。若想长久发展，需要盲区的那一方主动大量的沟通，相互理解。'
      ]
    }
  },
  31: {
    color: colors[2],
    list: ['不算完美', '中规中矩'],
    detail: {
      otherTxt: ['不算完美，中规中矩。']
    }
  },
  41: {
    color: colors[3],
    list: ['12位功能互换', '默契搭档，互相理解'],
    detail: {
      colorTxt: [
        { color: '#65D0A9', txt: '12功能互换，脑回路类似，互相理解。' }
      ],
      otherTxt: [
        '1功能是无意识且强大的，2功能则是有意识且工具性的。',
        '双方的功能互换导致了对方都能从讨论中Get到对方无意识且强大的部分，然后用2功能相互梳理清晰，是非常好的搭档。'
      ]
    }
  },
  42: {
    color: colors[3],
    list: ['23功能相同', '社会化相似，行动同频'],
    detail: {
      colorTxt: [
        { color: '#65D0A9', txt: '23功能相同，社会化相似，行动同频。' }
      ],
      otherTxt: [
        '第2功能是父母般的功能，常用来做事和帮助、支持他人，第3功能是永恒少年/少女，当第2功能无法解决问题时会出现提供不太成熟的支撑。同理6功能和7功能也有类似的表达。',
        '两者相同使两人的社会化行为出现了奇妙的相似感，双方行动上是同频的。'
      ]
    }
  },
  43: {
    color: colors[3],
    list: ['1功能相同', '无需多言，即可心领神会'],
    detail: {
      colorTxt: [
        { color: '#65D0A9', txt: '1功能相同，无需过多言语，即可思维同频。' }
      ],
      otherTxt: [
        '双方的1功能皆是无意识且强大的，常常对方仅仅需要一个眼色，便可心领神会。',
        '尽管2功能的处理信息方式不同，且对方的7位盲区正是自己的2功能，这种奇妙的组合常常能补足截然不同的视角。'
      ]
    }
  },
  51: {
    color: colors[4],
    list: ['23位功能互换', '相互欣赏，相互包容'],
    detail: {
      colorTxt: [{ color: '#65D0A9', txt: '23功能互换，互相欣赏互相包容。' }],
      otherTxt: [
        '由于对方第2功能是父母般的功能：用来做事和帮助、支持他人，刚好对应了自己的第3功能：永恒少年/少女。所以有了相互搀扶的效果。',
        '同时因为自己的6功能(批判)恰好是对方的7功能(盲区)，盲区的迟钝反而变得无伤大雅。'
      ]
    }
  },
  61: {
    color: colors[5],
    list: ['阳面功能与阴面功能互换', '思维迵异但殊途同归'],
    detail: {
      colorTxt: [{ color: '#65D0A9', txt: '阴阳面互换，思维迵异但殊途同归' }],
      otherTxt: [
        '前4个功能ei相反会产生强烈的化学反应，它们可以释放出变革的力量和启发。',
        '①Ni给Ne精炼的洞见，Ne给Ni可能性和创造力',
        '②Si给Se稳定/可靠，Se给Si刺激的全新体验',
        '③Fi给Fe道德/自我，Fe给Fi关注/信任与安慰',
        '④Ti给Te审慎与过滤，Te给Ti实际与高效',
        '这些功能相互寻求，相互成就。'
      ]
    }
  }
}

level['22'] = { ...level['21'] }
level['52'] = { ...level['51'] }

export default level
