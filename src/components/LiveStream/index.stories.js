import React from 'react'
import { LiveStream } from '..'

export default {
  title: 'Components/LiveStream',
  component: LiveStream
}

export const source = () => (
  <LiveStream href="https://www.twitch.tv/newhighsco" darkMode />
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

export const twitch = () => (
  <LiveStream href="https://www.twitch.tv/failarmy" autoplay={false} muted />
)

export const twitchDarkMode = () => (
  <LiveStream
    href="https://www.twitch.tv/failarmy"
    autoplay={false}
    muted
    darkMode
  />
)

twitchDarkMode.story = { name: 'Twitch - dark mode' }

export const youtube = () => (
  <LiveStream href="https://youtube.com/jarvenis" autoplay={false} muted />
)

youtube.story = { name: 'YouTube' }

export const youtubeDarkMode = () => (
  <LiveStream
    href="https://youtube.com/jarvenis"
    autoplay={false}
    muted
    darkMode
  />
)

youtubeDarkMode.story = { name: 'YouTube - dark mode' }
