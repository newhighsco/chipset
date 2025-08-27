import React from 'react'

import { imageUrl } from '../../__mocks__/fixtures'
import { Button, Card, SmartLink } from '..'

export default {
  component: Card
}

export const Source = {
  args: {
    href: 'https://example.com/',
    heading: 'Heading',
    image: { src: 'https://example.com/image.png' },
    children: 'Content'
  },
  parameters: { chromatic: { disable: true } }
}

export const WithHeading = {
  args: { heading: <h2>With heading</h2>, children: <p>Content</p> }
}

export const WithImage = {
  args: {
    heading: <h2>With image</h2>,
    image: { src: imageUrl, ratio: '4:1' },
    children: <p>Content</p>
  }
}

export const WithLink = {
  args: {
    heading: <h2>With link</h2>,
    href: 'https://example.com/outer-link',
    children: [
      <p key="content">Content</p>,
      <p key="inner-link">
        <SmartLink href="https://example.com/inner-link">Inner link</SmartLink>
      </p>,
      <Button key="button" href="https://example.com/inner-button">
        Inner button
      </Button>
    ]
  }
}
