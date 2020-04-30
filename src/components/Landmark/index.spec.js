import React from 'react'
import { shallow } from 'enzyme'
import { Landmark, VisuallyHidden } from '..'

describe('Components/Landmark', () => {
  it('should render correctly by default', () => {
    const wrapper = shallow(<Landmark />)

    expect(wrapper.find('a').length).toEqual(1)
    expect(wrapper.find('a').prop('children')).toEqual(undefined)
  })

  it("should render a <VisuallyHidden /> when 'children' is set", () => {
    const wrapper = shallow(<Landmark>Content</Landmark>)

    expect(wrapper.find(VisuallyHidden).length).toEqual(1)
    expect(wrapper.find(VisuallyHidden).prop('children')).toEqual('Content')
  })
})
