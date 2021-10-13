/**
 * @jest-environment jsdom
 */

import React, { createRef } from 'react'
import { mount, shallow } from 'enzyme'
import SmartLinkWithRef from '.'
import SmartLink from './SmartLink'

describe('Components/SmartLink', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<SmartLink />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <button /> when no 'href' is set", () => {
    const wrapper = shallow(<SmartLink>Content</SmartLink>)

    expect(wrapper.type()).toEqual('button')
  })

  it("should render an <a /> when internal 'href' is set", () => {
    const wrapper = shallow(
      <SmartLink href="/" target="_blank">
        children
      </SmartLink>
    )

    expect(wrapper.type()).toEqual('a')
    expect(wrapper.prop('target')).toEqual(undefined)
  })

  it("should render an <OutboundLink /> when external 'href' is set", () => {
    const wrapper = shallow(
      <SmartLink href="https://test.com/">Content</SmartLink>
    )

    expect(wrapper.type()).toEqual('a')
    expect(wrapper.prop('rel')).toEqual(undefined)
  })

  it("should add 'rel=noopener noreferrer' when external 'href' and 'target=blank' is set", () => {
    const wrapper = shallow(
      <SmartLink href="https://test.com/" target="_blank">
        Content
      </SmartLink>
    )

    expect(wrapper.type()).toEqual('a')
    expect(wrapper.prop('rel')).toEqual('noopener noreferrer')
  })

  it('should forward ref', () => {
    const ref = createRef()

    mount(
      <>
        <SmartLinkWithRef ref={ref}>Content</SmartLinkWithRef>
      </>
    )

    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
