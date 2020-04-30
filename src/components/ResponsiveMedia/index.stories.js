import React from 'react'
import { ResponsiveMedia } from '..'

export default {
  title: 'Components/ResponsiveMedia',
  component: ResponsiveMedia
}

export const source = () => (
  <ResponsiveMedia ratio="16:9">Content</ResponsiveMedia>
)

source.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const withImage = () => (
  <ResponsiveMedia ratio="4:3">
    <img src="https://source.unsplash.com/random/800x600" alt="" />
  </ResponsiveMedia>
)

export const withIframe = () => (
  <ResponsiveMedia ratio="16:9">
    <iframe title="iframe" src="https://www.youtube.com/embed/ScMzIvxBSi4" />
  </ResponsiveMedia>
)

export const withVideo = () => (
  <ResponsiveMedia ratio={9 / 16}>
    <video
      src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
      controls
      muted
    />
  </ResponsiveMedia>
)
