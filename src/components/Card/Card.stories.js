import React from 'react'
import { Button, Card } from '..'
import { imageUrl } from '../../__mocks__/fixtures'

export default {
  title: 'Components/Card',
  component: Card
}

export const source = () => (
  <Card
    heading={{ text: 'Heading text', href: 'https://example.com/' }}
    image={{ src: 'https://example.com/image.png' }}
  >
    Content
  </Card>
)

source.story = {
  parameters: {
    docs: {
      disable: true
    },
    percy: {
      skip: true
    }
  }
}

export const withHeading = () => (
  <Card heading={{ text: 'With Heading' }}>
    <p>Content</p>
  </Card>
)

export const withImage = () => (
  <Card
    heading={{ text: 'With Image' }}
    image={{ src: imageUrl, ratio: '4:1' }}
  >
    <p>Content</p>
  </Card>
)

export const withLink = () => (
  <Card
    heading={{
      text: 'With Link',
      href: 'https://example.com/title-link',
      target: '_blank'
    }}
  >
    <p>Content</p>
    <p>
      <a href="https://example.com/inner-link">Inner link</a>
    </p>
    <Button href="https://example.com/inner-button">Inner button</Button>
  </Card>
)
