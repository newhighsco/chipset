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

export const twitch = () => (
  <LiveStream href="https://www.twitch.tv/failarmy" muted />
)

export const twitchDarkMode = () => (
  <LiveStream href="https://www.twitch.tv/failarmy" muted darkMode />
)

twitchDarkMode.story = { name: 'Twitch - dark mode' }

export const mixer = () => (
  <LiveStream href="https://mixer.com/NatureTec" muted />
)
