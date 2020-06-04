import React from 'react'
import { LiveStream } from '..'

export default {
  title: 'Components/LiveStream',
  component: LiveStream
}

export const source = () => (
  <LiveStream href="https://www.twitch.tv/newhighsco" theme="dark" />
)

source.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const light = () => (
  <LiveStream href="https://www.twitch.tv/jarvenis" autoplay={false} muted />
)

export const dark = () => (
  <LiveStream
    href="https://www.twitch.tv/failarmy"
    darkMode
    autoplay={false}
    muted
  />
)
