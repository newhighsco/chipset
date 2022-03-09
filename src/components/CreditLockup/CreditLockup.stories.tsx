import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CreditLockup } from '..'
import PureCreditLockup from './CreditLockup'

export default {
  title: 'Components/CreditLockup',
  component: PureCreditLockup
} as ComponentMeta<typeof CreditLockup>

const Template: ComponentStory<typeof CreditLockup> = args => (
  <CreditLockup {...args} />
)

export const Source = Template.bind({})

Source.parameters = {
  chromatic: { disable: true }
}

export const TextDirection = () => (
  <>
    <CreditLockup dir="ltr" />
    <CreditLockup dir="rtl" />
  </>
)

export const Alignment = () => (
  <>
    <CreditLockup align="left" />
    <CreditLockup align="center" />
    <CreditLockup align="right" />
  </>
)
