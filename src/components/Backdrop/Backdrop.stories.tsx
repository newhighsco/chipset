import React from 'react'
import { ComponentStory, ComponentMeta, DecoratorFn } from '@storybook/react'
// import { Backdrop, Button, Image } from '..'
import Backdrop from '.'
import { imageUrl, videoUrl } from '../../__mocks__/fixtures'

export default {
  title: 'Components/Backdrop',
  component: Backdrop
} as ComponentMeta<typeof Backdrop>

const decorators = [
  (Story => (
    <div
      style={{
        height: 300,
        padding: '1em',
        transform: 'translate3d(0,0,0)',
        overflow: 'hidden'
      }}
    >
      {Story()}
      <button style={{ background: 'red' }}>Content</button>
    </div>
  )) as DecoratorFn
]
const Template: ComponentStory<typeof Backdrop> = args => <Backdrop {...args} />

export const source = Template.bind({})

source.args = {
  children: 'Content'
}
source.parameters = {
  chromatic: { disable: true }
}

export const withImage = Template.bind({})

withImage.args = {
  children: <img src={imageUrl} alt="" />
}
withImage.decorators = decorators

export const withVideo = Template.bind({})

withVideo.args = {
  children: <video src={videoUrl} poster={imageUrl} muted autoPlay />
}
withVideo.decorators = decorators
