import React from 'react'
import { render, screen } from '@testing-library/react'
import Landmark from './Landmark'

describe('Components/Landmark', () => {
  it('should render correctly by default', () => {
    const { container } = render(<Landmark />)
    const anchor = container.querySelector('a')

    expect(anchor).toBeInTheDocument()
    expect(anchor.childNodes.length).toEqual(0)
  })

  it("should render a <VisuallyHidden /> when 'children' is set", () => {
    const { container } = render(<Landmark>Content</Landmark>)

    expect(container.querySelector('a')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
