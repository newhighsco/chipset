import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SmartLink } from '..'
import PureSmartLink from './SmartLink'

export default {
  title: 'Components/SmartLink',
  component: PureSmartLink,
  parameters: {
    chromatic: { disable: true }
  }
} as ComponentMeta<typeof SmartLink>

const Template: ComponentStory<typeof SmartLink> = args => (
  <SmartLink {...args} />
)

export const Source = Template.bind({})

Source.args = {
  href: 'https://example.com/',
  children: 'Content'
}
