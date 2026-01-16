import { modes } from '@newhighsco/storybook-preset'

import { LiveStream } from '..'

export default {
  component: LiveStream,
  parameters: {
    chromatic: { disable: true, modes: modes('mobile', 'desktopLarge') }
  }
}

export const Source = { args: { href: 'https://www.twitch.tv/newhighsco' } }

export const Twitch = {
  args: { autoPlay: false, muted: true, href: 'https://www.twitch.tv/failarmy' }
}

export const TwitchDarkMode = {
  args: { ...Twitch.args, darkMode: true },
  name: 'Twitch - dark mode'
}

export const YouTube = {
  args: { ...Twitch.args, href: 'https://youtube.com/@LofiGirl' },
  name: 'YouTube'
}

export const YouTubeDarkMode = {
  args: { ...YouTube.args, darkMode: true },
  name: 'YouTube - dark mode'
}

export const Facebook = {
  args: { ...Twitch.args, href: 'https://facebook.gg/deltaofficialgaming' }
}
