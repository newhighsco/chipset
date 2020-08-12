import React from 'react'
import { Button, Card } from '..'
import { imageUrl } from '../../__mocks__/fixtures'

export default {
  title: 'Components/Card',
  component: Card
}

export const source = () => (
  <Card
    href="https://example.com/"
    heading={<h2>Heading</h2>}
    image={{ src: 'https://example.com/image.png' }}
  >
    Content
  </Card>
)

source.story = {
  parameters: {
    percy: {
      skip: true
    }
  }
}

export const withHeading = () => (
  <Card heading={<h2>With heading</h2>}>
    <p>Content</p>
  </Card>
)

export const withImage = () => (
  <Card heading={<h2>With image</h2>} image={{ src: imageUrl, ratio: '4:1' }}>
    <p>Content</p>
  </Card>
)

export const withLink = () => (
  <Card heading={<h2>With link</h2>} href="https://example.com/outer-link">
    <p>Content</p>
    <p>
      <a href="https://example.com/inner-link">Inner link</a>
    </p>
    <Button href="https://example.com/inner-button">Inner button</Button>
  </Card>
)
