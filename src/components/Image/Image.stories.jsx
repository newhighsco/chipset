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
  },
  parameters: { chromatic: { disable: true } }
}

export const Img = { args: { src: imageUrl } }

export const Picture = {
  args: { src: imageUrl, sources: [{ srcSet: imageWebPUrl }] }
}
