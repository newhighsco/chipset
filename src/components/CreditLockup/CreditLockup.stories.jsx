import React from 'react'

import { CreditLockup } from '..'

export default { component: CreditLockup }

export const Source = { parameters: { chromatic: { disable: true } } }

export const TextDirection = {
  render: () => ['ltr', 'rtl'].map(dir => <CreditLockup key={dir} dir={dir} />)
}

export const Alignment = {
  render: () =>
    ['left', 'center', 'right'].map(align => (
      <CreditLockup key={align} align={align} />
    ))
}
