import React from 'react'
import { LiveStream } from '..'
import PureLiveStream from './LiveStream'

export default {
  title: 'Components/LiveStream',
  component: LiveStream,
  parameters: {
    percy: {
      skip: true
    }
  }
}

const Template = args => <PureLiveStream {...args} />

export const source = Template.bind({})

source.args = {
  href: 'https://www.twitch.tv/newhighsco'
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

twitchDarkMode.storyName = 'Twitch - dark mode'

export const youtube = () => (
  <LiveStream href="https://youtube.com/KittenAcademy" autoPlay={false} muted />
)

youtube.storyName = 'YouTube'

export const youtubeDarkMode = () => (
  <LiveStream
    href="https://youtube.com/KittenAcademy"
    autoPlay={false}
    muted
    darkMode
  />
)

youtubeDarkMode.storyName = 'YouTube - dark mode'
