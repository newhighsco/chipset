import React from 'react'

import { Tooltip } from '..'
import PureTooltip from './Tooltip'

export default {
  component: PureTooltip
}

const Template = args => <Tooltip {...args} />

export const Source = Template.bind({})

Source.args = {
  toggle: 'Toggle',
  heading: 'Heading',
  children: 'Content'
}
Source.parameters = {
  chromatic: { disable: true }
}

export const WithClick = Template.bind({})

WithClick.args = {
  toggle: 'Click to view',
  heading: <h2>Heading</h2>,
  children: <p>Content</p>
}
WithClick.decorators = [
  Story => (
    <div style={{ padding: 50, textAlign: 'center' }}>
      <Story />
    </div>
  )
]

export const WithHover = Template.bind({})

WithHover.args = {
  ...WithClick.args,
  toggle: 'Hover/focus to view',
  manual: false
}
WithHover.decorators = WithClick.decorators
WithHover.storyName = 'With Hover/focus'

export const Alignment = () => (
  <>
    {['top', 'middle', 'bottom'].map(valign => (
      <div
        key={valign}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {['left', 'center', 'right'].map(align => (
          <div
            key={align}
            style={{ minWidth: 250, padding: 50, textAlign: 'center' }}
          >
            <Tooltip
              {...WithClick.args}
              toggle={`Tooltip ${valign} ${align}`}
              valign={valign}
              align={align}
              hidden={false}
              disabled
            />
          </div>
        ))}
      </div>
    ))}
  </>
)
