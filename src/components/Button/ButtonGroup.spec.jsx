import React from 'react'
import { shallow } from 'enzyme'
import ButtonGroup from './ButtonGroup'

import theme from './Button.module.scss'

describe('Components/ButtonGroup', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<ButtonGroup />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <div /> when 'children' is set", () => {
    const wrapper = shallow(<ButtonGroup>Content</ButtonGroup>)

    expect(wrapper.type()).toEqual('div')
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <ButtonGroup theme={theme} className="foo">
        Content
      </ButtonGroup>
    )

    expect(wrapper.prop('className')).toEqual('group foo')
  })
})
