import React from 'react'
import { shallow } from 'enzyme'
import CardImage from './CardImage'
import Image from '../Image'
import ResponsiveMedia from '../ResponsiveMedia'

describe('Components/CardImage', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<CardImage />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <ResponsiveImage /> when 'src' is set", () => {
    const wrapper = shallow(<CardImage src="https://example.com/image.png" />)

    expect(wrapper.type()).toEqual(ResponsiveMedia)
    expect(wrapper.prop('className')).toEqual(undefined)
    expect(wrapper.find(Image).prop('src')).toEqual(
      'https://example.com/image.png'
    )
  })

  it("should render correctly when 'render' is set", () => {
    const wrapper = shallow(
      <CardImage
        render={() => <img src="https://example.com/image.jpg" alt="" />}
      />
    )

    expect(wrapper.type()).toEqual(ResponsiveMedia)
    expect(wrapper.prop('className')).toEqual(undefined)
    expect(wrapper.find('img').prop('src')).toEqual(
      'https://example.com/image.jpg'
    )
  })
})
