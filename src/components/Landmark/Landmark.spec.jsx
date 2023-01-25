import { render, screen } from '@testing-library/react'
import React from 'react'

import Landmark from './Landmark'

describe('Components/Landmark', () => {
  it('should render correctly by default', () => {
    render(<Landmark id="landmark" />)
    const anchor = screen.getByTestId('landmark')

    expect(anchor).toBeInTheDocument()
    expect(anchor.childNodes.length).toEqual(0)
  })

  it("should render a <VisuallyHidden /> when 'children' is set", () => {
    render(<Landmark id="landmark">Content</Landmark>)

    expect(screen.getByTestId('landmark')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
