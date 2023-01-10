import React from 'react'
import { render, screen } from '@testing-library/react'
import SiteContainer from './SiteContainer'

describe('Components/SiteContainer', () => {
  it('should render nothing by default', () => {
    const { container } = render(<SiteContainer />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <div /> when 'children' is set", () => {
    render(<SiteContainer>Content</SiteContainer>)

    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
