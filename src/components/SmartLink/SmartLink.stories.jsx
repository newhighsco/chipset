import React from 'react'

import { Prose, SmartLink } from '..'

export default {
  component: SmartLink,
  decorators: [
    Story => (
      <Prose>
        <Story />
      </Prose>
    )
  ]
}

export const Source = {
  args: { href: 'https://example.com/', children: 'Content' }
}

export const Example = {
  args: Source.args,
  parameters: { chromatic: { disableSnapshot: false } }
}
