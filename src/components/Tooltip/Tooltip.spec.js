import React from 'react'
import { shallow } from 'enzyme'
import Tooltip from './Tooltip'
import SmartLink from '../SmartLink'

import theme from './Tooltip.module.scss'

describe('Components/Tooltip', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<Tooltip />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render correctly when 'children' is set", () => {
    const wrapper = shallow(<Tooltip>Content</Tooltip>)

    expect(wrapper.type()).toEqual('span')
    expect(wrapper.prop('className')).toEqual('')
    expect(wrapper.prop('onMouseOver')).toEqual(undefined)
    expect(wrapper.find(SmartLink).prop('aria-expanded')).toEqual(false)
    expect(wrapper.find('[hidden=true]').length).toEqual(1)

    wrapper.find(SmartLink).simulate('click')

    expect(wrapper.find(SmartLink).prop('aria-expanded')).toEqual(true)
    expect(wrapper.find('[hidden=false]').length).toEqual(1)
  })

  it("should render correctly when 'heading' is set", () => {
    const wrapper = shallow(<Tooltip heading={<h2>Heading</h2>} />)

    expect(wrapper.type()).toEqual('span')
  })

  it('should handle additional events when `automatic` is set', () => {
    const wrapper = shallow(<Tooltip automatic>Content</Tooltip>)

    expect(wrapper.prop('onMouseOver')).not.toEqual(undefined)
    expect(wrapper.find(SmartLink).prop('aria-expanded')).toEqual(undefined)
    expect(wrapper.find('[hidden=true]').length).toEqual(1)

    wrapper.simulate('focus')

    expect(wrapper.find('[hidden=false]').length).toEqual(1)
  })

  it('should display the contents when `hidden` is false', () => {
    const wrapper = shallow(<Tooltip hidden={false}>Content</Tooltip>)

    expect(wrapper.find(SmartLink).prop('aria-expanded')).toEqual(true)
    expect(wrapper.find('[hidden=false]').length).toEqual(1)
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <Tooltip theme={theme} className="foo">
        Content
      </Tooltip>
    )

    expect(wrapper.prop('className')).toEqual('root foo')
  })
})
