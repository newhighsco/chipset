import React from 'react'
import { Backdrop } from '.'

export default {
  title: 'Components/Backdrop',
  component: Backdrop
}

export const basic = () => (
  <Backdrop
    image="https://example.com/image.png"
    video="https://example.com/video.mp4"
  />
)

basic.story = {
  parameters: {
    docs: {
      disable: true
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
    <Backdrop video="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
  </div>
)
