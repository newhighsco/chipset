import React from 'react'
import { Button } from '..'
import PureButton from './Button'
import ButtonGroup from './ButtonGroup'

export default {
  title: 'Components/Button',
  component: Button,
  subcomponents: { ButtonGroup }
}

const Template = args => <PureButton {...args} />

export const source = Template.bind({})

source.args = {
  href: 'https://example.com/',
  children: 'Content'
}

source.story = {
  parameters: {
    percy: {
      skip: true
    }
  }
}

export const example = () => (
  <Button.Group>
    <Button>Default</Button>
    <Button href="https://example.com/" target="_blank" active>
      Active
    </Button>
    <Button disabled>Disabled</Button>
  </Button.Group>
)

example.story = {
  name: ' '
}
