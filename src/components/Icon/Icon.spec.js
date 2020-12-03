import React from 'react'
import { shallow } from 'enzyme'
import Icon from './Icon'
import VisuallyHidden from '../VisuallyHidden'

const theme = { root: 'root', customSize: 'customSize' }

describe('Components/Icon', () => {
  it('should render npothing by default', () => {
    const wrapper = shallow(<Icon />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <span /> when 'children' is set", () => {
    const wrapper = shallow(<Icon>Content</Icon>)

    expect(wrapper.type()).toEqual('span')
    expect(wrapper.prop('className')).toEqual('')
    expect(wrapper.prop('role')).toEqual(undefined)
    expect(wrapper.prop('aria-label')).toEqual(undefined)
    expect(wrapper.prop('aria-hidden')).toEqual('true')
    expect(wrapper.prop('style')).toEqual({
      width: undefined,
      height: undefined,
      lineHeight: undefined
    })
    expect(wrapper.children().length).toEqual(1)
  })

  it("should render a <VisuallyHidden /> when 'alt' is set", () => {
    const wrapper = shallow(<Icon alt="foo">Content</Icon>)

    expect(wrapper.prop('role')).toEqual('img')
    expect(wrapper.prop('aria-label')).toEqual('foo')
    expect(wrapper.prop('aria-hidden')).toEqual(undefined)
    expect(wrapper.children().length).toEqual(2)
    expect(wrapper.childAt(0).type()).toEqual(VisuallyHidden)
    expect(wrapper.childAt(0).prop('children')).toEqual('foo')
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <Icon theme={theme} width={20} height={10}>
        Content
      </Icon>
    )

    expect(wrapper.prop('className')).toEqual('root customSize')
    expect(wrapper.prop('style')).toEqual({
      width: '20px',
      height: '10px',
      lineHeight: '10px'
    })
  })
})
