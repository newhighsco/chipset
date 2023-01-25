import { render, screen } from '@testing-library/react'
import React from 'react'

import FooterContainer from './FooterContainer'

describe('Components/FooterContainer', () => {
  it('should render nothing by default', () => {
    const { container } = render(<FooterContainer />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <ContentContainer /> when 'children' is set", () => {
    const { container } = render(<FooterContainer>Content</FooterContainer>)

    expect(container.firstChild.tagName).toEqual('FOOTER')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
