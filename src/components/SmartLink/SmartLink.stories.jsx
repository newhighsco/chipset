import React from 'react'

import { Prose, SmartLink } from '..'

export default { component: SmartLink }

export const Source = {
  args: { href: 'https://example.com/', children: 'Content' },
  parameters: { chromatic: { disable: true } }
}

export const Example = {
  args: Source.args,
  decorators: [
    Story => (
      <Prose>
        <Story />
      </Prose>
    )
  ]
}
