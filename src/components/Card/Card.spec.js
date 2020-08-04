import React from 'react'
import { shallow } from 'enzyme'
import { Card, CardHeading, CardImage } from './Card'
import { Element, ResponsiveMedia } from '..'

import theme from './Card.module.scss'

describe('Components/Card', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<Card />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <div /> when 'children' is set", () => {
    const wrapper = shallow(<Card>Content</Card>)

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.prop('className')).toEqual('')
    expect(wrapper.prop('role')).toEqual(undefined)
    expect(wrapper.find(CardImage).prop('src')).toEqual(undefined)
    expect(wrapper.find(CardHeading).prop('text')).toEqual(undefined)
  })

  it("should render correct [role] when 'heading.href' is set", () => {
    const wrapper = shallow(
      <Card heading={{ text: 'Heading text', href: 'https://example.com/' }}>
        Content
      </Card>
    )

    expect(wrapper.prop('role')).toEqual('link')
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <Card theme={theme} className="foo">
        Content
      </Card>
    )

    expect(wrapper.prop('className')).toEqual('wrapper foo')
  })
})

describe('Components/CardImage', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<CardImage />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <ResponsiveImage /> when 'src' is set", () => {
    const wrapper = shallow(<CardImage src="https://example.com/image.png" />)

    expect(wrapper.type()).toEqual(ResponsiveMedia)
    expect(wrapper.prop('className')).toEqual(undefined)
    expect(wrapper.find('img').prop('src')).toEqual(
      'https://example.com/image.png'
    )
  })
})

describe('Components/CardHeading', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<CardHeading />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <h2 /> when 'text' is set", () => {
    const wrapper = shallow(<CardHeading text="Heading text" />)

    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.prop('as')).toEqual('h2')
    expect(wrapper.prop('className')).toEqual(undefined)
    expect(wrapper.childAt(0).text()).toEqual('Heading text')
  })

  it("should render an <a /> when 'href' is set", () => {
    const wrapper = shallow(
      <CardHeading text="Heading text" href="https://example.com/" />
    )

    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.prop('as')).toEqual('h2')
    expect(wrapper.childAt(0).prop('href')).toEqual('https://example.com/')
    expect(wrapper.childAt(0).text()).toEqual('Heading text')
  })
})
