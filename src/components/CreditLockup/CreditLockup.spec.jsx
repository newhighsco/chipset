import React from 'react'
import { render, screen } from '@testing-library/react'
import CreditLockup from './CreditLockup'

import theme from './CreditLockup.module.scss'

describe('Components/CreditLockup', () => {
  it('should render correctly', () => {
    render(<CreditLockup align="left" dir="rtl" />)

    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByLabelText('New High Score')).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    const { container } = render(<CreditLockup theme={theme} />)

    expect(container.firstChild).toHaveClass('root')
  })
})
