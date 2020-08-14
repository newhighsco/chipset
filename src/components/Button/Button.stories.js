import React from 'react'
import { Button, ButtonGroup } from '..'
import { Button as PureButton } from './Button'

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
  <ButtonGroup>
    <Button>Blah</Button>
    <Button href="/test" disabled>
      Blah
    </Button>
    <Button href="https://test.com/" active>
      Blah
    </Button>
  </ButtonGroup>
)

example.story = {
  name: ' '
}
