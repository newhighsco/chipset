import { render, screen } from '@testing-library/react'
import React from 'react'

import CardHeading from './CardHeading'

describe('Components/CardHeading', () => {
  it('should render nothing by default', () => {
    const { container } = render(<CardHeading />)

    expect(container.firstChild).toBeNull()
  })

  it("should render correctly when 'children' is set", () => {
    render(
      <CardHeading>
        <h2>Heading</h2>
      </CardHeading>
    )

    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it("should render an <SmartLink /> when 'href' is set", () => {
    render(
      <CardHeading href="https://example.com/">
        <h2>Heading</h2>
      </CardHeading>
    )

    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
