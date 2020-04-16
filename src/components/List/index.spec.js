import React from 'react'
import { shallow } from 'enzyme'
import { List } from '.'
import { Element } from '../Element'

const children = (
  <>
    <li>Child</li>
    <li>Child</li>
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
    expect(wrapper.prop('className')).toEqual('wrapper')
  })

  it("should render the correct component when 'as' is set", () => {
    const wrapper = shallow(<List as="ol">{children}</List>)

    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.prop('as')).toEqual('ol')
    expect(wrapper.prop('className')).toEqual('wrapper')
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <List unstyled inline commaSeparated>
        {children}
      </List>
    )

    expect(wrapper.prop('className')).toEqual(
      'wrapper unstyled inline commaSeparated'
    )
  })
})
