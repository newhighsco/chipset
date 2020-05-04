import React from 'react'
import { shallow } from 'enzyme'
import { ResponsiveMedia } from '..'

describe('Components/ResponsiveMedia', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<ResponsiveMedia />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render no `style` when 'ratio' is not set", () => {
    const wrapper = shallow(<ResponsiveMedia>Content</ResponsiveMedia>)

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.prop('style')).toEqual({})
  })

  it("should render correct `style` when 'ratio' is set to a number", () => {
    const wrapper = shallow(
      <ResponsiveMedia ratio={9 / 16}>Content</ResponsiveMedia>
    )

    expect(wrapper.prop('style')).toEqual({
      paddingBottom: '56.25%'
    })
  })

  it("should render correct `style` when 'ratio' is set to a string", () => {
    const wrapper = shallow(
      <ResponsiveMedia ratio="4:3" style={{ background: 'red' }}>
        Content
      </ResponsiveMedia>
    )

    expect(wrapper.prop('style')).toEqual({
      background: 'red',
      paddingBottom: '75%'
    })
  })
})
