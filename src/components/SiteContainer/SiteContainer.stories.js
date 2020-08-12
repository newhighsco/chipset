import React from 'react'
import { SiteContainer } from '..'
import { SiteContainer as PureSiteContainer } from './SiteContainer'

export default {
  title: 'Components/SiteContainer',
  component: SiteContainer
}

const storyArgs = { children: 'Content' }
const StoryComponent = args => <PureSiteContainer {...args} />

export const source = StoryComponent.bind({})

source.story = {
  parameters: {
    percy: {
      skip: true
    }
  }
}

source.args = storyArgs

export const example = args => <SiteContainer {...args} />

example.story = {
  name: ' '
}

example.args = storyArgs
