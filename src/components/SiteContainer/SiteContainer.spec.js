import React from 'react'
import { shallow } from 'enzyme'
import { SiteContainer } from './SiteContainer'

describe('Components/SiteContainer', () => {
  it("should set no 'style' by default", () => {
    const wrapper = shallow(<SiteContainer />)

    expect(wrapper.prop('style')).toEqual(undefined)
  })

  it("should set 'style' when 'windowHeight' is set", () => {
    const wrapper = shallow(<SiteContainer windowHeight={200} />)

    expect(wrapper.prop('style')).toEqual({ minHeight: 200 })
  })
})
