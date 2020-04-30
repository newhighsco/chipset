import React from 'react'
import { shallow } from 'enzyme'
import { Element } from '..'
import { ContentContainer } from './ContentContainer'

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
      <ContentContainer theme={theme} fullWidth gutter>
        Content
      </ContentContainer>
    )

    expect(wrapper.prop('className')).toEqual('wrapper fullWidth gutter')
  })
})
