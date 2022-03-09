import React from 'react'
import { render, screen } from '@testing-library/react'
import Image from './Image'
import { Source } from './Image.stories'

describe('Components/Image', () => {
  it('should render nothing by default', () => {
    render(<Source />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it("should render the correct component when 'src' is set", () => {
    const { container } = render(
      <Source {...Source.args} sources={undefined} className="className" />
    )
    expect(container.firstChild.nodeName).toEqual('IMG')

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveClass('className')
    expect(image).toHaveAttribute('src', 'https://example.com/image.png')
  })

  it("should render the correct component when 'sources' is set", () => {
    const { container } = render(
      <Source {...Source.args} className="className" />
    )
    expect(container.firstChild.childNodes.length).toEqual(3)

    const root = container.firstChild
    expect(root.nodeName).toEqual('PICTURE')
    expect(root).toHaveClass('className')

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).not.toHaveClass()
  })
})
