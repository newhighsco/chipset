import { render, screen } from '@testing-library/react'
import React from 'react'

import { ImageProvider, useImage } from '.'

const Image = props => {
  const renderImage = useImage()

  return renderImage(props)
}

describe('Provider/ImageProvider', () => {
  it('should render an <img /> by default', () => {
    render(<Image src="https://example.com/image.png" />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it("should throw error when 'renderImage' is not set", () => {
    expect(() =>
      render(
        <ImageProvider>
          <Image />
        </ImageProvider>
      )
    ).toThrow(/missing 'renderImage'/)
  })

  it("should render custom element when 'renderImage' is set", () => {
    render(
      <ImageProvider
        renderImage={props => <img {...props} role="presentation" />}
      >
        <Image src="https://example.com/image.png" />
      </ImageProvider>
    )

    expect(screen.getByRole('presentation')).toBeInTheDocument()
  })
})
