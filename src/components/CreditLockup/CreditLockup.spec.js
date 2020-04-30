import React from 'react'
import { shallow } from 'enzyme'
import { CreditLockup } from './CreditLockup'

describe('Components/CreditLockup', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<CreditLockup align="left" dir="rtl" />)

    expect(wrapper.type()).toEqual('span')
    expect(wrapper.prop('align')).toEqual('left')
    expect(wrapper.prop('dir')).toEqual('rtl')
  })
})
