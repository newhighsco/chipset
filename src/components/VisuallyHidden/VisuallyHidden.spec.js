import React from 'react'
import { shallow } from 'enzyme'
import { Element, VisuallyHidden } from '..'

describe('Components/VisuallyHidden', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<VisuallyHidden />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <span /> when 'children' is set", () => {
    const wrapper = shallow(<VisuallyHidden>Content</VisuallyHidden>)

    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.prop('as')).toEqual('span')
  })
})
