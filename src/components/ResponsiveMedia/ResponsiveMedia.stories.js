import React from 'react'
import { Image, ResponsiveMedia } from '..'
import PureResponsiveMedia from './ResponsiveMedia'
import { imageUrl, imageWebPUrl, videoUrl } from '../../__mocks__/fixtures'

export default {
  title: 'Components/ResponsiveMedia',
  component: PureResponsiveMedia
}

const Template = args => <ResponsiveMedia {...args} />

export const source = Template.bind({})

source.args = {
  ratio: '16:9',
  children: 'Content'
}
source.parameters = {
  chromatic: { disable: true },
  percy: { skip: true }
}

export const withImage = Template.bind({})

withImage.args = {
  ratio: '4:1',
  children: <Image src={imageUrl} />
}

export const withPicture = Template.bind({})

withPicture.args = {
  ratio: '4:1',
  children: <Image src={imageUrl} sources={[{ srcSet: imageWebPUrl }]} />
}

export const withIframe = Template.bind({})

withIframe.args = {
  ratio: '16:9',
  children: <iframe title="iframe" src="https://example.com/" loading="lazy" />
}

export const withVideo = Template.bind({})

withVideo.args = {
  ratio: 9 / 16,
  children: <video src={videoUrl} poster={imageUrl} muted />
}
