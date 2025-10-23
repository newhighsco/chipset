import { render, screen } from '@testing-library/react'
import React from 'react'

import ResponsiveMedia from './ResponsiveMedia'

describe('Components/ResponsiveMedia', () => {
  it('should render nothing by default', () => {
    const { container } = render(<ResponsiveMedia />)

    expect(container.firstChild).toBeNull()
  })

  it("should render no `style` when 'ratio' is not set", () => {
    const { container } = render(<ResponsiveMedia>Content</ResponsiveMedia>)

    expect(container.firstChild).not.toHaveAttribute('style')
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it("should render correct `style` when 'ratio' is set to a number", () => {
    const { container } = render(
      <ResponsiveMedia ratio={9 / 16}>Content</ResponsiveMedia>
    )

    expect(container.firstChild).toHaveStyle({ paddingBottom: '56.25%' })
  })

  it("should render correct `style` when 'ratio' is set to a string", () => {
    const { container } = render(
      <ResponsiveMedia ratio="4:3" style={{ background: 'red' }}>
        Content
      </ResponsiveMedia>
    )

    expect(container.firstChild).toHaveStyle({
      background: 'red',
      paddingBottom: '75%'
    })
  })
})
