import React from 'react'
import { shallow } from 'enzyme'
import Grid from './Grid'

import theme from './Grid.module.scss'

describe('Components/Grid', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<Grid />)

    expect(wrapper.type()).toEqual(null)
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <Grid
        gutter="double"
        gutterless
        reverse
        flex
        valign="bottom"
        theme={theme}
        className="foo"
      >
        Content
      </Grid>
    )

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.prop('className')).toEqual(
      'root double gutterless reverse flex valign-bottom foo'
    )
  })
})
