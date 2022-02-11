import React from 'react'
import { LiveStream } from '..'
import PureLiveStream from './LiveStream'

import breakpoints from '../../../styles/_breakpoints.module.scss'

export default {
  title: 'Components/LiveStream',
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

export const source = Template.bind({})

source.args = {
  href: 'https://www.twitch.tv/newhighsco'
}

export const twitch = Template.bind({})

twitch.args = {
  ...storyArgs,
  href: 'https://www.twitch.tv/failarmy'
}

export const twitchDarkMode = Template.bind({})

twitchDarkMode.args = {
  ...twitch.args,
  darkMode: true
}
twitchDarkMode.storyName = 'Twitch - dark mode'

export const youTube = Template.bind({})

youTube.args = {
  ...storyArgs,
  href: 'https://youtube.com/c/ExploreAfrica'
}
youTube.storyName = 'YouTube'

export const youTubeDarkMode = Template.bind({})

youTubeDarkMode.args = {
  ...youTube.args,
  darkMode: true
}
youTubeDarkMode.storyName = 'YouTube - dark mode'

export const facebook = Template.bind({})

facebook.args = {
  ...storyArgs,
  href: 'https://facebook.gg/deltaofficialgaming'
}
