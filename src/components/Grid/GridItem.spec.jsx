import React from 'react'
import { render } from '@testing-library/react'
import GridItem from './GridItem'

import theme from './Grid.module.scss'

describe('Components/GridItem', () => {
  it('should render nothing by default', () => {
    const { container } = render(<GridItem />)

    expect(container.firstChild).toBeNull()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <GridItem
        sizes={['one-half', 'desktop-one-whole']}
        theme={theme}
        className="bar"
      >
        Content
      </GridItem>
    )

    expect(container.firstChild).toHaveClass(
      'item one-half desktop-one-whole bar'
    )
  })
})
