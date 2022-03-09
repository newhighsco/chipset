import React from 'react'
import { render, screen } from '@testing-library/react'
import { Group } from './Button.stories'

describe('Components/ButtonGroup', () => {
  it('should render nothing by default', () => {
    render(<Group />)
    expect(screen.queryByText('Default')).not.toBeInTheDocument()
    expect(screen.queryByText('Active')).not.toBeInTheDocument()
    expect(screen.queryByText('Disabled')).not.toBeInTheDocument()
  })

  it("should render a <div /> when 'children' is set", () => {
    render(<Group {...Group.args} />)
    expect(screen.getByText('Default')).toBeInTheDocument()
    expect(screen.getByText('Active')).toBeInTheDocument()
    expect(screen.getByText('Disabled')).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <Group {...Group.args} theme={{ group: 'group' }} className="className" />
    )
    expect(container.firstChild).toHaveClass('group className')
  })
})
