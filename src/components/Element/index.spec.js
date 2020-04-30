import React from 'react'
import { shallow } from 'enzyme'
import { Element } from '..'

describe('Components/Element', () => {
  it('should render <div /> by default', () => {
    const wrapper = shallow(<Element />)

    expect(wrapper.type()).toEqual('div')
  })

  it("should render the correct component when 'as' is set", () => {
    const wrapper = shallow(<Element as="span" />)

    expect(wrapper.type()).toEqual('span')
  })
})
