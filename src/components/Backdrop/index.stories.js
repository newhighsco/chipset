import React from 'react'
import { Backdrop, Button } from '..'
import { imageUrl, videoUrl } from '../../__mocks__/fixtures'

export default {
  title: 'Components/Backdrop',
  component: Backdrop
}

export const source = () => (
  <Backdrop
    image="https://example.com/image.png"
    video="https://example.com/video.mp4"
  />
)

source.story = {
  parameters: {
    percy: {
      skip: true
    }
  }
}

export const withImage = () => (
  <div style={{ height: 300, padding: '1em' }}>
    <Backdrop image={imageUrl} />
    <Button>Content</Button>
  </div>
)

withImage.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const withVideo = () => (
  <div style={{ height: 300, padding: '1em' }}>
    <Backdrop image={imageUrl} video={videoUrl} autoPlay={false} />
    <Button>Content</Button>
  </div>
)

withVideo.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}
