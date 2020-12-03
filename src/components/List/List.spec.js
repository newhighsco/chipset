import React from 'react'
import { shallow } from 'enzyme'
import List from './List'
import Element from '../Element'

import theme from './List.module.scss'

const children = (
  <>
    <li>Content</li>
    <li>Content</li>
  </>
)

describe('Components/List', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<List />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render <ul /> when 'children' are passed", () => {
    const wrapper = shallow(<List>{children}</List>)

    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.prop('as')).toEqual('ul')
  })

  it("should render the correct component when 'as' is set", () => {
    const wrapper = shallow(<List as="ol">{children}</List>)

    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.prop('as')).toEqual('ol')
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <List theme={theme} unstyled inline commaSeparated>
        {children}
      </List>
    )

    expect(wrapper.prop('className')).toEqual(
      'root unstyled inline commaSeparated'
    )
  })
})
