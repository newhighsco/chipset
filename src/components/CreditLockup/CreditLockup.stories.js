import React from 'react'
import { CreditLockup } from '..'
import PureCreditLockup from './CreditLockup'

export default {
  title: 'Components/CreditLockup',
  component: CreditLockup
}

const Template = args => <PureCreditLockup {...args} />

export const source = Template.bind({})

source.story = {
  parameters: {
    percy: {
      skip: true
    }
  }
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
