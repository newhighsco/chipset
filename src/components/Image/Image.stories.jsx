import React from 'react'

import { imageUrl, imageWebPUrl } from '../../__mocks__/fixtures'
import { Image } from '..'

export default {
  component: Image
}

const Template = args => <Image {...args} />

export const Source = Template.bind({})

Source.args = {
  src: 'https://Example.com/image.jpg',
  sources: [
    { srcSet: 'https://Example.com/image.webp' },
    { srcSet: 'https://Example.com/image.jpg' }
  ]
}

Source.parameters = {
  chromatic: { disable: true }
}

export const Img = Template.bind({})

Img.args = {
  src: imageUrl
}

export const Picture = Template.bind({})

Picture.args = {
  src: imageUrl,
  sources: [{ srcSet: imageWebPUrl }]
}
