import React from 'react'
import { Button, Card } from '..'
import PureCard from './Card'
import { imageUrl } from '../../__mocks__/fixtures'

export default {
  title: 'Components/Card',
  component: PureCard
}

const Template = args => <Card {...args} />

export const source = Template.bind({})

source.args = {
  href: 'https://example.com/',
  heading: 'Heading',
  image: { src: 'https://example.com/image.png' },
  children: 'Content'
}

source.parameters = {
  percy: {
    skip: true
  }
}

export const withHeading = Template.bind({})

withHeading.args = {
  heading: <h2>With heading</h2>,
  children: <p>Content</p>
}

export const withImage = Template.bind({})

withImage.args = {
  heading: <h2>With image</h2>,
  image: { src: imageUrl, ratio: '4:1' },
  children: <p>Content</p>
}

export const withLink = Template.bind({})

withLink.args = {
  heading: <h2>With link</h2>,
  href: 'https://example.com/outer-link',
  children: [
    <p key="content">Content</p>,
    <p key="inner-link">
      <a href="https://example.com/inner-link">Inner link</a>
    </p>,
    <Button key="button" href="https://example.com/inner-button">
      Inner button
    </Button>
  ]
}
