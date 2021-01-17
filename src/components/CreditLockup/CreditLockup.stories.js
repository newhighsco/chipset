import React from 'react'
import { CreditLockup } from '..'
import PureCreditLockup from './CreditLockup'

export default {
  title: 'Components/CreditLockup',
  component: PureCreditLockup
}

const Template = args => <CreditLockup {...args} />

export const source = Template.bind({})

source.parameters = {
  chromatic: { disable: true },
  percy: { skip: true }
}

export const textDirection = () => (
  <>
    <CreditLockup dir="ltr" />
    <CreditLockup dir="rtl" />
  </>
)

export const alignment = () => (
  <>
    <CreditLockup align="left" />
    <CreditLockup align="center" />
    <CreditLockup align="right" />
  </>
)
