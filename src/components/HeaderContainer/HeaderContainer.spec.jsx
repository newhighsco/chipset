import { render, screen } from '@testing-library/react'
import React from 'react'

import HeaderContainer from './HeaderContainer'

describe('Components/HeaderContainer', () => {
  it('should render nothing by default', () => {
    const { container } = render(<HeaderContainer />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <ContentContainer /> when 'children' is set", () => {
    const { container } = render(<HeaderContainer>Content</HeaderContainer>)

    expect(container.firstChild.tagName).toEqual('HEADER')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
