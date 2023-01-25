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
    expect(container.querySelectorAll('* > img')).toHaveLength(1)
    expect(screen.getByRole('img')).toBeInTheDocument()
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
    expect(container.querySelectorAll('img')).toHaveLength(1)
    expect(container.querySelectorAll('source')).toHaveLength(2)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    const { container: image } = render(
      <Image className="foo" src="https://example.com/image.png" />
    )

    expect(image.firstChild).toHaveClass('foo')

    const { container: picture } = render(
      <Image
        className="bar"
        src="https://example.com/image.png"
        sources={[
          { srcSet: 'https://example.com/image.jpg' },
          { srcSet: 'https://example.com/image.webp' }
        ]}
      />
    )

    expect(picture.firstChild).toHaveClass('bar')
    expect(picture.querySelector('img')).not.toHaveClass()
  })
})
