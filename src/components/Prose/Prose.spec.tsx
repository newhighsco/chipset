import React from 'react'
import { render, screen } from '@testing-library/react'
import { Source, WithChildren, WithHTML } from './Prose.stories'

describe('Component/Prose', () => {
  it('should render nothing by default', () => {
    render(<Source />)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it("should render correctly when 'children' is set", () => {
    render(<WithChildren {...WithChildren.args} />)
    expect(
      screen.getByText('Typography', { selector: 'h1' })
    ).toBeInTheDocument()
  })

  it("should render correctly when 'html' is set", () => {
    render(<WithHTML {...WithHTML.args} />)
    expect(
      screen.getByText('This text', { selector: 'strong' })
    ).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <Source {...Source.args} theme={{ root: 'root' }} className="className" />
    )
    expect(container.firstChild).toHaveClass('root className')
  })
})
