import React from 'react'
import { Backdrop, Button } from '..'
import { imageUrl, videoUrl } from '../../__mocks__/fixtures'

export default {
  title: 'Components/Backdrop',
  component: Backdrop
}

const storyDecorators = [
  Story => (
    <div style={{ height: 300, padding: '1em' }}>
      <Story />
      <Button>Content</Button>
    </div>
  )
]
const Template = args => <Backdrop {...args} />

export const source = Template.bind({})

source.args = {
  image: 'https://example.com/image.png',
  video: 'https://example.com/video.mp4'
}

source.story = {
  parameters: {
    percy: {
      skip: true
    }
  }
}

export const withImage = Template.bind({})

withImage.args = {
  image: imageUrl
}

withImage.decorators = storyDecorators

withImage.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const withVideo = Template.bind({})

withVideo.args = {
  image: imageUrl,
  video: videoUrl,
  autoplay: false
}

withVideo.decorators = storyDecorators

withVideo.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}
