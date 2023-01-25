import { render, screen } from '@testing-library/react'
import React from 'react'

import VisuallyHidden from './VisuallyHidden'

describe('Components/VisuallyHidden', () => {
  it('should render nothing by default', () => {
    const { container } = render(<VisuallyHidden />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <span /> when 'children' is set", () => {
    render(<VisuallyHidden>Content</VisuallyHidden>)

    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
