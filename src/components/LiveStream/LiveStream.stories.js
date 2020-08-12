import React from 'react'
import { LiveStream } from '..'

export default {
  title: 'Components/LiveStream',
  component: LiveStream,
  parameters: {
    percy: {
      skip: true
    }
  }
}

export const source = () => (
  <LiveStream href="https://www.twitch.tv/newhighsco" darkMode />
)

source.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const twitch = () => (
  <LiveStream href="https://www.twitch.tv/failarmy" autoPlay={false} muted />
)

export const twitchDarkMode = () => (
  <LiveStream
    href="https://www.twitch.tv/failarmy"
    autoPlay={false}
    muted
    darkMode
  />
)

twitchDarkMode.story = { name: 'Twitch - dark mode' }

export const youtube = () => (
  <LiveStream href="https://youtube.com/failarmy" autoPlay={false} muted />
)

youtube.story = { name: 'YouTube' }

export const youtubeDarkMode = () => (
  <LiveStream
    href="https://youtube.com/failarmy"
    autoPlay={false}
    muted
    darkMode
  />
)

youtubeDarkMode.story = { name: 'YouTube - dark mode' }
