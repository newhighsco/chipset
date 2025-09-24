import { render } from '@testing-library/react'
import React from 'react'

import Grid from './Grid'
import theme from './Grid.module.scss'

describe('Components/Grid', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Grid />)

    expect(container.firstChild).toBeNull()
  })

  it('should set correct classNames', () => {
    const { container } = render(
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

    expect(container.firstChild).toHaveClass(
      'root double gutterless reverse flex valign-bottom foo',
      { exact: true }
    )
  })
})
