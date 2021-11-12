import React from 'react'
import { Tooltip } from '..'
import PureTooltip from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: PureTooltip
}

const Template = args => <Tooltip {...args} />

export const source = Template.bind({})

source.args = {
  toggle: 'Toggle',
  heading: 'Heading',
  children: 'Content'
}
source.parameters = {
  chromatic: { disable: true }
}

export const manual = Template.bind({})

manual.args = {
  toggle: 'Click to view',
  heading: <h2>Heading</h2>,
  children: <p>Content</p>
}
manual.decorators = [
  Story => (
    <div style={{ padding: 50 }} align="center">
      <Story />
    </div>
  )
]

export const automatic = Template.bind({})

automatic.args = {
  ...manual.args,
  toggle: 'Hover/focus to view',
  automatic: true
}
automatic.decorators = manual.decorators

export const alignment = () => (
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
            style={{ minWidth: 250, padding: 50 }}
            align="center"
          >
            <Tooltip
              {...manual.args}
              toggle={`Tooltip ${valign} ${align}`}
              valign={valign}
              align={align}
              hidden={false}
            />
          </div>
        ))}
      </div>
    ))}
  </>
)
