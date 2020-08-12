import React from 'react'
import { ResponsiveMedia } from '..'
import { imageUrl, videoUrl } from '../../__mocks__/fixtures'

export default {
  title: 'Components/ResponsiveMedia',
  component: ResponsiveMedia
}

export const source = () => (
  <ResponsiveMedia ratio="16:9">Content</ResponsiveMedia>
)

source.story = {
  parameters: {
    percy: {
      skip: true
    }
  }
}

export const withImage = () => (
  <ResponsiveMedia ratio="4:1">
    <img src={imageUrl} alt="" loading="lazy" />
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
