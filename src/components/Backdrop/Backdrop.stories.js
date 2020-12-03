import React from 'react'
import { Backdrop, Button, Image } from '..'
import { imageUrl, imageWebPUrl, videoUrl } from '../../__mocks__/fixtures'

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
  children: 'Content'
}

source.parameters = {
  percy: {
    skip: true
  }
}

export const withImage = Template.bind({})

withImage.args = {
  children: <Image src={imageUrl} sources={[{ srcSet: imageWebPUrl }]} />
}

withImage.decorators = storyDecorators

withImage.parameters = {
  docs: {
    disable: true
  }
}

export const withVideo = Template.bind({})

withVideo.args = {
  children: <video src={videoUrl} poster={imageUrl} muted />
}

withVideo.decorators = storyDecorators

withVideo.parameters = {
  docs: {
    disable: true
  }
}
