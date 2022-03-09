import React from 'react'
import { render, screen } from '@testing-library/react'
import { Source } from './CreditLockup.stories'

describe('Components/CreditLockup', () => {
  it('should render correctly', () => {
    render(<Source />)
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText('Proudly brought to you by')).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <Source
        theme={{ root: 'root', link: 'link', logo: 'logo', text: 'text' }}
        className="className"
      />
    )
    expect(container.firstChild).toHaveClass('root className')
  })
})
