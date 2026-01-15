import React from 'react'

import { Tooltip } from '..'

export default { component: Tooltip }

export const Source = {
  args: { toggle: 'Toggle', heading: 'Heading', children: 'Content' },
  parameters: { chromatic: { disable: true } }
}

export const WithClick = {
  args: {
    toggle: 'Click to view',
    heading: <h2>Heading</h2>,
    children: <p>Content</p>
  },
  decorators: [
    Story => (
      <div style={{ padding: 50, textAlign: 'center' }}>
        <Story />
      </div>
    )
  ]
}

export const WithHover = {
  args: { ...WithClick.args, toggle: 'Hover/focus to view', manual: false },
  decorators: WithClick.decorators,
  name: 'With Hover/focus'
}

export const Alignment = {
  render: () => (
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
}
