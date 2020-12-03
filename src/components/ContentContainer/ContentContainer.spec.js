import React from 'react'
import { shallow } from 'enzyme'
import ContentContainer from './ContentContainer'
import Element from '../Element'

import theme from './ContentContainer.module.scss'

describe('Components/ContentContainer', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<ContentContainer />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <div /> when 'children' is set", () => {
    const wrapper = shallow(<ContentContainer>Content</ContentContainer>)

    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.prop('as')).toEqual(undefined)
    expect(wrapper.prop('className')).toEqual('')
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <ContentContainer theme={theme} size="mobile" gutter>
        Content
      </ContentContainer>
    )

    expect(wrapper.prop('className')).toEqual('root mobile gutter')
  })
})
