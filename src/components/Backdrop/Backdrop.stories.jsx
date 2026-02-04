import { snapshot } from '@newhighsco/storybook-preset'
import React from 'react'

import { imageUrl, imageWebPUrl, videoUrl } from '../../__mocks__/fixtures'
import { Backdrop, Button, Image } from '..'

export default {
  component: Backdrop,
  parameters: { chromatic: { disableSnapshot: false } }
}

const decorators = [
  Story => (
    <div
      style={{
        height: 300,
        padding: '1em',
        transform: 'translate3d(0,0,0)',
        overflow: 'hidden'
      }}
    >
      {Story()}
      <Button>Content</Button>
    </div>
  )
]

export const Source = {
  args: { children: 'Content' },
  parameters: { chromatic: { disableSnapshot: true } }
}

export const WithImage = {
  args: {
    children: <Image src={imageUrl} sources={[{ srcSet: imageWebPUrl }]} />
  },
  decorators
}

export const WithVideo = {
  args: { children: <video src={videoUrl} poster={imageUrl} muted /> },
  decorators
}
