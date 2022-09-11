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

export const withClick = Template.bind({})

withClick.args = {
  toggle: 'Click to view',
  heading: <h2>Heading</h2>,
  children: <p>Content</p>
}
withClick.decorators = [
  Story => (
    <div style={{ padding: 50, textAlign: 'center' }}>
      <Story />
    </div>
  )
]

export const withHover = Template.bind({})

withHover.args = {
  ...withClick.args,
  toggle: 'Hover/focus to view',
  manual: false
}
withHover.decorators = withClick.decorators
withHover.storyName = 'With Hover/focus'

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
            style={{ minWidth: 250, padding: 50, textAlign: 'center' }}
          >
            <Tooltip
              {...withClick.args}
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
