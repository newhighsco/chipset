import React from 'react'
import { shallow } from 'enzyme'
import Backdrop from './Backdrop'
import Element from '../Element'

describe('Components/Backdrop', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<Backdrop />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <div /> when 'children' is set", () => {
    const wrapper = shallow(<Backdrop>Children</Backdrop>)

    expect(wrapper.type()).toEqual(Element)
  })

  it('should render a <div /> when a prop is set', () => {
    const wrapper = shallow(<Backdrop as="p" style={{ background: 'red' }} />)

    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.prop('as')).toEqual('p')
    expect(wrapper.prop('style')).toEqual({ background: 'red' })
  })
})
