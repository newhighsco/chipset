import { snapshot } from '@newhighsco/storybook-preset'
import React from 'react'

import { CreditLockup } from '..'

export default { component: CreditLockup }

export const Source = {}

export const TextDirection = {
  render: () => ['ltr', 'rtl'].map(dir => <CreditLockup key={dir} dir={dir} />)
}

export const Alignment = {
  render: () =>
    ['left', 'center', 'right'].map(align => (
      <CreditLockup key={align} align={align} />
    ))
}

export const Snapshot = snapshot([
  { args: { align: 'left', dir: 'ltr' } },
  { args: { align: 'center', dir: 'ltr' } },
  { args: { align: 'right', dir: 'ltr' } },
  { args: { align: 'left', dir: 'rtl' } },
  { args: { align: 'center', dir: 'rtl' } },
  { args: { align: 'right', dir: 'rtl' } }
])
