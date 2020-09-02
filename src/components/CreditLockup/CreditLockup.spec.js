import React from 'react'
import { shallow } from 'enzyme'
import CreditLockup from './CreditLockup'

import theme from './CreditLockup.module.scss'

describe('Components/CreditLockup', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<CreditLockup align="left" dir="rtl" />)

    expect(wrapper.type()).toEqual('span')
    expect(wrapper.prop('className')).toEqual(undefined)
    expect(wrapper.prop('align')).toEqual('left')
    expect(wrapper.prop('dir')).toEqual('rtl')
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(<CreditLockup theme={theme} />)

    expect(wrapper.prop('className')).toEqual('wrapper')
  })
})
