import React, { createRef } from 'react'
import { mount, shallow } from 'enzyme'
import CardWithRef from '.'
import Card from './Card'
import CardHeading from './CardHeading'
import CardImage from './CardImage'

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

    expect(wrapper.prop('className')).toEqual('root foo')
  })

  it('should forward ref', () => {
    const ref = createRef()

    mount(
      <>
        <CardWithRef ref={ref}>Content</CardWithRef>
      </>
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
