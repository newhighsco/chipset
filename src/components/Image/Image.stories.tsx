import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Image } from '..'
import { imageUrl, imageWebPUrl } from '../../__mocks__/fixtures'

export default {
  title: 'Components/Image',
  component: Image
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = args => <Image {...args} />

export const Source = Template.bind({})

Source.args = {
  src: 'https://example.com/image.png',
  sources: [
    { srcSet: 'https://example.com/image.webp' },
    { srcSet: 'https://example.com/image.jpg' }
  ]
}
Source.parameters = {
  chromatic: { disable: true }
}

export const WithImage = Template.bind({})

WithImage.args = {
  src: imageUrl
}

export const WithPicture = Template.bind({})

WithPicture.args = {
  ...WithImage.args,
  sources: [{ srcSet: imageWebPUrl }]
}
