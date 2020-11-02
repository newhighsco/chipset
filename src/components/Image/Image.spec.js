import React from 'react'
import { mount, shallow } from 'enzyme'
import Image from './Image'

describe('Components/Image', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<Image />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render the correct component when 'src' is set", () => {
    const wrapper = mount(<Image src="https://example.com/image.png" />)

    expect(wrapper.find('Picture > img').length).toEqual(1)
    expect(wrapper.find('Picture > img').prop('src')).toEqual(
      'https://example.com/image.png'
    )
  })

  it("should render the correct component when 'sources' is set", () => {
    const wrapper = mount(
      <Image
        src="https://example.com/image.png"
        sources={[
          { srcSet: 'https://example.com/image.jpg' },
          { srcSet: 'https://example.com/image.webp' }
        ]}
      />
    )

    expect(wrapper.find('Picture > img').length).toEqual(0)
    expect(wrapper.find('Picture > picture').length).toEqual(1)
    expect(wrapper.find('picture > source').length).toEqual(2)
    expect(wrapper.find('picture > source').first().prop('srcSet')).toEqual(
      'https://example.com/image.jpg'
    )
    expect(wrapper.find('picture > img').length).toEqual(1)
    expect(wrapper.find('picture > img').prop('src')).toEqual(
      'https://example.com/image.png'
    )
  })

  it('should set correct classNames', () => {
    let wrapper = mount(
      <Image className="foo" src="https://example.com/image.png" />
    )

    expect(wrapper.find('Picture > img').prop('className')).toEqual('foo')

    wrapper = mount(
      <Image
        className="bar"
        src="https://example.com/image.png"
        sources={[
          { srcSet: 'https://example.com/image.jpg' },
          { srcSet: 'https://example.com/image.webp' }
        ]}
      />
    )

    expect(wrapper.find('Picture > picture').prop('className')).toEqual('bar')
    expect(wrapper.find('picture > img').prop('className')).toEqual(undefined)
  })
})
