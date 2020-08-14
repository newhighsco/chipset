import React from 'react'
import { shallow } from 'enzyme'
import { Card, CardHeading, CardImage } from './Card'
import { Image, ResponsiveMedia, SmartLink } from '..'

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

  it("should render correct [role] when 'href' is set", () => {
    const wrapper = shallow(
      <Card href="https://example.com/" heading={<h2>Heading</h2>}>
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
    expect(wrapper.find(Image).prop('src')).toEqual(
      'https://example.com/image.png'
    )
  })
})

describe('Components/CardHeading', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<CardHeading />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render correctly when 'children' is set", () => {
    const wrapper = shallow(
      <CardHeading>
        <h2>Heading</h2>
      </CardHeading>
    )

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.prop('className')).toEqual(undefined)
    expect(wrapper.childAt(0).type()).toEqual('h2')
    expect(wrapper.childAt(0).text()).toEqual('Heading')
  })

  it("should render an <SmartLink /> when 'href' is set", () => {
    const wrapper = shallow(
      <CardHeading href="https://example.com/">
        <h2>Heading</h2>
      </CardHeading>
    )

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.childAt(0).type()).toEqual(SmartLink)
    expect(wrapper.childAt(0).prop('href')).toEqual('https://example.com/')
    expect(wrapper.childAt(0).childAt(0).type()).toEqual('h2')
    expect(wrapper.childAt(0).childAt(0).text()).toEqual('Heading')
  })
})
