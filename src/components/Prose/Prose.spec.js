import React from 'react'
import { shallow } from 'enzyme'
import Prose from './Prose'

describe('Component/Prose', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<Prose />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render correctly when 'children' is set", () => {
    const wrapper = shallow(
      <Prose>
        <p>Content</p>
      </Prose>
    )

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.find('p').text()).toEqual('Content')
  })

  it("should render correctly when 'html' is set", () => {
    const wrapper = shallow(<Prose html="<p>Content</p>" />)

    expect(wrapper.html()).toContain('><p>Content</p></')
  })
})
