import React from 'react'
import { Backdrop } from '..'

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
    docs: {
      disable: true
    },
    percy: {
      skip: true
    }
  }
}

export const withImage = () => (
  <div style={{ height: 300 }}>
    <Backdrop image="https://source.unsplash.com/random" />
  </div>
)

export const withVideo = () => (
  <div style={{ height: 300 }}>
    <Backdrop video="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" />
  </div>
)

withVideo.story = {
  parameters: {
    percy: {
      skip: true
    }
  }
}
