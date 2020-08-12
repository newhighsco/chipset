import React from 'react'
import { CreditLockup } from '..'

export default {
  title: 'Components/CreditLockup',
  component: CreditLockup
}

export const source = () => <CreditLockup />

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
