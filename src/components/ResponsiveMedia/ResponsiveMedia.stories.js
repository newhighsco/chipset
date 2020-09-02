import React from 'react'
import { Image, ResponsiveMedia } from '..'
import PureResponsiveMedia from './ResponsiveMedia'
import { imageUrl, imageWebPUrl, videoUrl } from '../../__mocks__/fixtures'

export default {
  title: 'Components/ResponsiveMedia',
  component: ResponsiveMedia
}

const Template = args => <PureResponsiveMedia {...args} />

export const source = Template.bind({})

source.args = {
  ratio: '16:9',
  children: 'Content'
}

source.story = {
  parameters: {
    percy: {
      skip: true
    }
  }
}

export const withImage = () => (
  <ResponsiveMedia ratio="4:1">
    <Image src={imageUrl} />
  </ResponsiveMedia>
)

export const withPicture = () => (
  <ResponsiveMedia ratio="4:1">
    <Image src={imageUrl} sources={[{ srcSet: imageWebPUrl }]} />
  </ResponsiveMedia>
)

export const withIframe = () => (
  <ResponsiveMedia ratio="16:9">
    <iframe title="iframe" src="https://example.com/" loading="lazy" />
  </ResponsiveMedia>
)

export const withVideo = () => (
  <ResponsiveMedia ratio={9 / 16}>
    <video src={videoUrl} poster={imageUrl} muted />
  </ResponsiveMedia>
)
