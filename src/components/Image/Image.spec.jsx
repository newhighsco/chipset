import { render, screen } from '@testing-library/react'
import React from 'react'

import Image from './Image'

describe('Components/Image', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Image />)

    expect(container.firstChild).toBeNull()
  })

  it("should render the correct component when 'src' is set", () => {
    const { container } = render(<Image src="https://example.com/image.png" />)

    expect(container.firstChild.tagName).toEqual('IMG')
    expect(screen.getAllByRole('presentation')).toHaveLength(1)
  })

  it("should render the correct component when 'sources' is set", () => {
    const { container } = render(
      <Image
        src="https://example.com/image.png"
        sources={[
          { srcSet: 'https://example.com/image.jpg' },
          { srcSet: 'https://example.com/image.webp' }
        ]}
      />
    )

    expect(container.firstChild.tagName).toEqual('PICTURE')
    expect(screen.getAllByRole('presentation')).toHaveLength(1)
    expect(container.firstChild.childNodes).toHaveLength(3)
  })

  it("should set correct classNames when 'src' is set", () => {
    render(<Image className="foo" src="https://example.com/image.png" />)

    expect(screen.getByRole('presentation')).toHaveClass('foo', { exact: true })
  })

  it("should set correct classNames when 'sources' is set", () => {
    const { container } = render(
      <Image
        className="bar"
        src="https://example.com/image.png"
        sources={[
          { srcSet: 'https://example.com/image.jpg' },
          { srcSet: 'https://example.com/image.webp' }
        ]}
      />
    )

    expect(container.firstChild).toHaveClass('bar', { exact: true })
    expect(screen.getByRole('presentation')).not.toHaveClass()
  })
})
