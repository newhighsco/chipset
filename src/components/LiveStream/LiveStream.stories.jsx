import React from 'react'
import { LiveStream } from '..'
import PureLiveStream from './LiveStream'

import breakpoints from '../../../styles/_breakpoints.module.scss'

export default {
  component: PureLiveStream,
  parameters: {
    chromatic: {
      disable: true,
      viewports: [Number(breakpoints.mobile), Number(breakpoints.desktopLarge)]
    }
  }
}

const storyArgs = {
  autoPlay: false,
  muted: true
}
const Template = args => <LiveStream {...args} />

export const Source = Template.bind({})

Source.args = {
  href: 'https://www.twitch.tv/newhighsco'
}

export const Twitch = Template.bind({})

Twitch.args = {
  ...storyArgs,
  href: 'https://www.twitch.tv/failarmy'
}

export const TwitchDarkMode = Template.bind({})

TwitchDarkMode.args = {
  ...Twitch.args,
  darkMode: true
}
TwitchDarkMode.storyName = 'Twitch - dark mode'

export const YouTube = Template.bind({})

YouTube.args = {
  ...storyArgs,
  href: 'https://youtube.com/c/ExploreAfrica'
}
YouTube.storyName = 'YouTube'

export const YouTubeDarkMode = Template.bind({})

YouTubeDarkMode.args = {
  ...YouTube.args,
  darkMode: true
}
YouTubeDarkMode.storyName = 'YouTube - dark mode'

export const Facebook = Template.bind({})

Facebook.args = {
  ...storyArgs,
  href: 'https://facebook.gg/deltaofficialgaming'
}
