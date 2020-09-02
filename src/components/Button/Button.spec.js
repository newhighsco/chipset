import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'
import SmartLink from '../SmartLink'

import theme from './Button.module.scss'

describe('Components/Button', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <SmartLink /> when 'children' is set", () => {
    const wrapper = shallow(<Button>Content</Button>)

    expect(wrapper.type()).toEqual(SmartLink)
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <Button theme={theme} active className="foo">
        Content
      </Button>
    )

    expect(wrapper.prop('className')).toEqual('item active foo')
  })
})
