import React from 'react'
import { Image } from '..'
import { imageUrl, imageWebPUrl } from '../../__mocks__/fixtures'

export default {
  title: 'Components/Image',
  component: Image
}

const storyArgs = {
  src: imageUrl,
  sources: [{ srcSet: imageWebPUrl }, { srcSet: imageUrl }]
}
const StoryComponent = args => <Image {...args} />

export const source = StoryComponent.bind({})

source.args = storyArgs

source.story = {
  parameters: {
    percy: {
      skip: true
    }
  }
}

export const img = StoryComponent.bind({})

img.args = {
  src: storyArgs.src
}

export const picture = StoryComponent.bind({})

picture.args = {
  ...storyArgs,
  sources: [{ srcSet: imageWebPUrl }, { srcSet: imageUrl }]
}
