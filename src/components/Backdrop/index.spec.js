import React from 'react'
import { shallow } from 'enzyme'
import { Backdrop, Element } from '..'

describe('Components/Backdrop', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<Backdrop />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <div /> when 'image' is set", () => {
    const wrapper = shallow(<Backdrop image="https://example.com/image.png" />)

    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.prop('as')).toEqual(undefined)
    expect(wrapper.prop('style')).toEqual({
      backgroundImage: 'url(https://example.com/image.png)'
    })
  })

  it("should render a <video /> when 'video' is set", () => {
    const wrapper = shallow(<Backdrop video="https://example.com/image.mp4" />)

    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.prop('style')).toEqual(undefined)
    expect(wrapper.prop('as')).toEqual('video')
    expect(wrapper.prop('src')).toEqual('https://example.com/image.mp4')
    expect(wrapper.prop('loop')).toEqual(true)
  })
})
