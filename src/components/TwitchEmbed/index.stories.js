import React from 'react'
import { TwitchEmbed } from '..'

export default {
  title: 'Components/TwitchEmbed',
  component: TwitchEmbed
}

export const source = () => <TwitchEmbed channel="newhighsco" theme="dark" />

source.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const light = () => (
  <TwitchEmbed channel="jarvenis" autoplay={false} muted />
)

export const dark = () => (
  <TwitchEmbed channel="failarmy" theme="dark" autoplay={false} muted />
)
