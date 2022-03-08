import React from 'react'
import { render, screen } from '@testing-library/react'
import { Ordered, Source, Unordered } from './List.stories'

describe('Components/List', () => {
  it('should render nothing by default', () => {
    render(<Source />)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it("should render <ul /> when 'children' are passed", () => {
    const { container } = render(<Unordered {...Unordered.args} />)
    expect(container.firstChild.nodeName).toEqual('UL')
    expect(
      screen.getAllByText('List item', { selector: 'li' }).length
    ).toBeGreaterThan(0)
  })

  it("should render the correct component when 'as' is set", () => {
    const { container } = render(<Ordered {...Ordered.args} />)
    expect(container.firstChild.nodeName).toEqual('OL')
    expect(
      screen.getAllByText('List item', { selector: 'li' }).length
    ).toBeGreaterThan(0)
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <Source
        {...Source.args}
        theme={{
          root: 'root',
          unstyled: 'unstyled',
          inline: 'inline',
          commaSeparated: 'commaSeparated'
        }}
        unstyled
        inline
        commaSeparated
        className="className"
      />
    )
    expect(container.firstChild).toHaveClass(
      'root unstyled inline commaSeparated className'
    )
  })
})
