import { render } from '@testing-library/react'
import React from 'react'

import List from './List'
import theme from './List.module.scss'

const children = (
  <>
    <li>Content</li>
    <li>Content</li>
  </>
)

describe('Components/List', () => {
  it('should render nothing by default', () => {
    const { container } = render(<List />)

    expect(container.firstChild).toBeNull()
  })

  it("should render <ul /> when 'children' are passed", () => {
    const { container } = render(<List>{children}</List>)

    expect(container.firstChild.tagName).toEqual('UL')
  })

  it("should render the correct component when 'as' is set", () => {
    const { container } = render(<List as="ol">{children}</List>)

    expect(container.firstChild.tagName).toEqual('OL')
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <List theme={theme} unstyled inline commaSeparated>
        {children}
      </List>
    )

    expect(container.firstChild).toHaveClass(
      'root unstyled inline commaSeparated',
      { exact: true }
    )
  })
})
