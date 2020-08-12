import React from 'react'
import { Button, ButtonGroup } from '..'

export default {
  title: 'Components/Button',
  component: Button,
  subcomponents: { ButtonGroup }
}

export const source = () => <Button>Content</Button>

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
