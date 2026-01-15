import { render, screen } from '@testing-library/react'
import React from 'react'

import ContentContainer from './ContentContainer'
import theme from './ContentContainer.module.scss'

describe('Components/ContentContainer', () => {
  it('should render nothing by default', () => {
    const { container } = render(<ContentContainer />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <div /> when 'children' is set", () => {
    render(<ContentContainer>Content</ContentContainer>)

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <ContentContainer theme={theme} size="mobile" gutter>
        Content
      </ContentContainer>
    )

    expect(container.firstChild).toHaveClass('root mobile gutter', {
      exact: true
    })
  })
})
