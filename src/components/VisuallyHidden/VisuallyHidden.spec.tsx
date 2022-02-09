import React from 'react'
import { render, screen } from '@testing-library/react'
import { Source } from './VisuallyHidden.stories'

describe('Components/VisuallyHidden', () => {
  it('should render nothing by default', () => {
    render(<Source />)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it("should render a <span /> when 'children' is set", () => {
    render(<Source {...Source.args} />)
    expect(
      screen.getByText('Content', { selector: 'span' })
    ).toBeInTheDocument()
  })
})
