import { snapshot } from '@newhighsco/storybook-preset'
import React from 'react'

import { imageUrl, imageWebPUrl } from '../../__mocks__/fixtures'
import { Image } from '..'

export default { component: Image }

export const Source = {
  args: {
    src: 'https://example.com/image.jpg',
    sources: [
      { srcSet: 'https://example.com/image.webp' },
      { srcSet: 'https://example.com/image.jpg' }
    ]
  }
}

export const Img = { args: { src: imageUrl } }

export const Picture = {
  args: { src: imageUrl, sources: [{ srcSet: imageWebPUrl }] }
}

export const Snapshot = snapshot([Img, Picture], {
  decorator: storyFn => <div>{storyFn}</div>
})
