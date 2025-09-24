import { render } from '@testing-library/react'
import React from 'react'

import theme from './Grid.module.scss'
import GridItem from './GridItem'

describe('Components/GridItem', () => {
  it('should render nothing by default', () => {
    const { container } = render(<GridItem />)

    expect(container.firstChild).toBeNull()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <GridItem
        sizes={['one-half', 'tablet-one-whole', 'desktop-hidden']}
        theme={theme}
        className="bar"
      >
        Content
      </GridItem>
    )

    expect(container.firstChild).toHaveClass(
      'item one-half tablet-one-whole desktop-hidden bar',
      { exact: true }
    )
  })
})
