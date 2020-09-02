import React from 'react'
import { shallow } from 'enzyme'
import CardHeading from './CardHeading'
import SmartLink from '../SmartLink'

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
