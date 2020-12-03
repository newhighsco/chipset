import React from 'react'
import { Image } from '..'
import { imageUrl, imageWebPUrl } from '../../__mocks__/fixtures'

export default {
  title: 'Components/Image',
  component: Image
}

const Template = args => <Image {...args} />

export const source = Template.bind({})

source.args = {
  src: 'https://example.com/image.jpg',
  sources: [
    { srcSet: 'https://example.com/image.webp' },
    { srcSet: 'https://example.com/image.jpg' }
  ]
}

source.parameters = {
  percy: {
    skip: true
  }
}

export const img = Template.bind({})

img.args = {
  src: imageUrl
}

export const picture = Template.bind({})

picture.args = {
  src: imageUrl,
  sources: [{ srcSet: imageWebPUrl }]
}
