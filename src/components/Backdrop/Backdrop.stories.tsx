import React from 'react'
import { ComponentStory, ComponentMeta, DecoratorFn } from '@storybook/react'
// import { Backdrop, Button, Image } from '..'
import { Backdrop } from '..'
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

export const Source = Template.bind({})

Source.args = {
  children: 'Content'
}
Source.parameters = {
  chromatic: { disable: true }
}

export const WithImage = Template.bind({})

WithImage.args = {
  children: <img src={imageUrl} alt="" />
}
WithImage.decorators = decorators

export const WithVideo = Template.bind({})

WithVideo.args = {
  children: <video src={videoUrl} poster={imageUrl} muted autoPlay />
}
WithVideo.decorators = decorators
