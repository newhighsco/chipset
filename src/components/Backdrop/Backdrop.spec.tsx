import React from 'react'
import { render, screen } from '@testing-library/react'
import { Source } from './Backdrop.stories'

describe('Components/Backdrop', () => {
  it('should render nothing by default', () => {
    render(<Source />)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it("should render a <div /> when 'children' is set", () => {
    render(<Source {...Source.args} />)
    expect(screen.getByText('Content', { selector: 'div' })).toBeInTheDocument()
  })
})
