import React from 'react'
import { render, screen } from '@testing-library/react'
import Backdrop from './Backdrop'

describe('Components/Backdrop', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Backdrop />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <div /> when 'children' is set", () => {
    render(<Backdrop>Children</Backdrop>)

    expect(screen.getByText('Children')).toBeInTheDocument()
  })
})
