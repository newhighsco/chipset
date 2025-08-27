import React from 'react'

import { imageUrl, imageWebPUrl, videoUrl } from '../../__mocks__/fixtures'
import { Image, ResponsiveMedia } from '..'

export default {
  component: ResponsiveMedia
}

export const Source = {
  args: { ratio: '16:9', children: 'Content' },
  parameters: { chromatic: { disable: true } }
}

export const WithImage = {
  args: { ratio: '4:1', children: <Image src={imageUrl} /> }
}

export const WithPicture = {
  args: {
    ratio: '4:1',
    children: <Image src={imageUrl} sources={[{ srcSet: imageWebPUrl }]} />
  }
}

export const WithIframe = {
  args: {
    ratio: '16:9',
    children: (
      <iframe title="iframe" src="https://example.com/" loading="lazy" />
    )
  }
}

export const WithVideo = {
  args: {
    ratio: 9 / 16,
    children: <video src={videoUrl} poster={imageUrl} muted />
  }
}
