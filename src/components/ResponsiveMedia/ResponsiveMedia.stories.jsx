import React from 'react'

import { imageUrl, imageWebPUrl, videoUrl } from '../../__mocks__/fixtures'
import { Image, ResponsiveMedia } from '..'
import PureResponsiveMedia from './ResponsiveMedia'

export default {
  component: PureResponsiveMedia
}

const Template = args => <ResponsiveMedia {...args} />

export const Source = Template.bind({})

Source.args = {
  ratio: '16:9',
  children: 'Content'
}
Source.parameters = {
  chromatic: { disable: true }
}

export const WithImage = Template.bind({})

WithImage.args = {
  ratio: '4:1',
  children: <Image src={imageUrl} />
}

export const WithPicture = Template.bind({})

WithPicture.args = {
  ratio: '4:1',
  children: <Image src={imageUrl} sources={[{ srcSet: imageWebPUrl }]} />
}

export const WithIframe = Template.bind({})

WithIframe.args = {
  ratio: '16:9',
  children: <iframe title="iframe" src="https://Example.com/" loading="lazy" />
}

export const WithVideo = Template.bind({})

WithVideo.args = {
  ratio: 9 / 16,
  children: <video src={videoUrl} poster={imageUrl} muted />
}
