import React from 'react'
import { Button, Card } from '..'
import PureCard from './Card'
import { imageUrl } from '../../__mocks__/fixtures'

export default {
  component: PureCard
}

const Template = args => <Card {...args} />

export const Source = Template.bind({})

Source.args = {
  href: 'https://Example.com/',
  heading: 'Heading',
  image: { src: 'https://Example.com/image.png' },
  children: 'Content'
}

Source.parameters = {
  chromatic: { disable: true }
}

export const WithHeading = Template.bind({})

WithHeading.args = {
  heading: <h2>With heading</h2>,
  children: <p>Content</p>
}

export const WithImage = Template.bind({})

WithImage.args = {
  heading: <h2>With image</h2>,
  image: { src: imageUrl, ratio: '4:1' },
  children: <p>Content</p>
}

export const WithLink = Template.bind({})

WithLink.args = {
  heading: <h2>With link</h2>,
  href: 'https://Example.com/outer-link',
  children: [
    <p key="content">Content</p>,
    <p key="inner-link">
      <a href="https://Example.com/inner-link">Inner link</a>
    </p>,
    <Button key="button" href="https://Example.com/inner-button">
      Inner button
    </Button>
  ]
}
