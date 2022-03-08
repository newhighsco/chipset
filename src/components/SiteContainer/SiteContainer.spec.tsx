import React from 'react'
import { render, screen } from '@testing-library/react'
import { Source } from './SiteContainer.stories'

describe('Components/SiteContainer', () => {
  it('should render nothing by default', () => {
    render(<Source />)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it("should render a <ContentContainer /> when 'children' is set", () => {
    render(<Source {...Source.args} />)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <Source {...Source.args} theme={{ root: 'root' }} className="className" />
    )
    expect(container.firstChild).toHaveClass('root className')
  })
})
