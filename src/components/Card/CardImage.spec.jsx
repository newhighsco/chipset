import { render, screen } from '@testing-library/react'
import React from 'react'

import CardImage from './CardImage'

describe('Components/CardImage', () => {
  it('should render nothing by default', () => {
    const { container } = render(<CardImage />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <ResponsiveImage /> when 'src' is set", () => {
    render(<CardImage src="https://example.com/image.png" />)

    expect(screen.getByRole('presentation')).toBeInTheDocument()
  })

  it("should render correctly when 'render' is set", () => {
    render(
      <CardImage
        render={() => <img src="https://example.com/image.jpg" alt="" />}
      />
    )

    expect(screen.getByRole('presentation')).toBeInTheDocument()
  })
})
