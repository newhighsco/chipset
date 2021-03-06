import React from 'react'
import { shallow } from 'enzyme'
import SiteContainer from './SiteContainer'
import Element from '../Element'

describe('Components/SiteContainer', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<SiteContainer />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <div /> when 'children' is set", () => {
    const wrapper = shallow(<SiteContainer>Content</SiteContainer>)

    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.prop('as')).toEqual(undefined)
    expect(wrapper.prop('className')).toEqual('')
  })
})
