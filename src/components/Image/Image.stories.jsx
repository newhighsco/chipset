import { imageUrl, imageWebPUrl } from '../../__mocks__/fixtures'
import { Image } from '..'

export default {
  component: Image
}

export const Source = {
  args: {
    src: 'https://Example.com/image.jpg',
    sources: [
      { srcSet: 'https://Example.com/image.webp' },
      { srcSet: 'https://Example.com/image.jpg' }
    ]
  },
  parameters: { chromatic: { disable: true } }
}

export const Img = { args: { src: imageUrl } }

export const Picture = {
  args: { src: imageUrl, sources: [{ srcSet: imageWebPUrl }] }
}
