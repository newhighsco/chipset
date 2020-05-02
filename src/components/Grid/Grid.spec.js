import React from 'react'
import { shallow } from 'enzyme'
import { Grid, GridItem } from './Grid'

const theme = {
  wrapper: 'wrapper',
  double: 'double',
  gutterless: 'gutterless',
  reverse: 'reverse',
  'valign-bottom': 'valign-bottom',
  item: 'item',
  'one-half': 'one-half',
  'desktop-one-whole': 'desktop-one-whole'
}

describe('Components/Grid', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<Grid />)

    expect(wrapper.type()).toEqual(null)
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <Grid gutter="double" gutterless reverse valign="bottom" theme={theme}>
        Content
      </Grid>
    )

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.prop('className')).toEqual(
      'wrapper double gutterless reverse valign-bottom'
    )
  })
})

describe('Components/GridItem', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<GridItem />)

    expect(wrapper.type()).toEqual(null)
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <GridItem sizes={['one-half', 'desktop-one-whole']} theme={theme}>
        Content
      </GridItem>
    )

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.prop('className')).toEqual('item one-half desktop-one-whole')
  })
})
