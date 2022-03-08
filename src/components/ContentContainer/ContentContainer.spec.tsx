import React from 'react'
import { render, screen } from '@testing-library/react'
import { Source } from './ContentContainer.stories'

describe('Components/ContentContainer', () => {
  it('should render nothing by default', () => {
    render(<Source />)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it("should render a <div /> when 'children' is set", () => {
    render(<Source {...Source.args} />)
    expect(screen.getByText('Content', { selector: 'div' })).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <Source
        {...Source.args}
        theme={{ root: 'root', mobile: 'mobile', gutter: 'gutter' }}
        size="mobile"
        gutter
        className="className"
      />
    )
    expect(container.firstChild).toHaveClass('root mobile gutter className')
  })
})
