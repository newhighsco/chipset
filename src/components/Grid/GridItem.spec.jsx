import React from 'react'
import { shallow } from 'enzyme'
import GridItem from './GridItem'

import theme from './Grid.module.scss'

describe('Components/GridItem', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<GridItem />)

    expect(wrapper.type()).toEqual(null)
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <GridItem
        sizes={['one-half', 'desktop-one-whole']}
        theme={theme}
        className="bar"
      >
        Content
      </GridItem>
    )

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.prop('className')).toEqual(
      'item one-half desktop-one-whole bar'
    )
  })
})
