import { render, screen } from '@testing-library/react'
import React from 'react'

import PageContainer from './PageContainer'

describe('Components/PageContainer', () => {
  it('should render nothing by default', () => {
    const { container } = render(<PageContainer />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <ContentContainer /> when 'children' is set", () => {
    render(<PageContainer>Content</PageContainer>)

    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it("should render correctly when 'header' is set", () => {
    render(
      <PageContainer header={<header>Header</header>}>Content</PageContainer>
    )

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByText('Header')).toBeInTheDocument()
  })

  it("should render correctly when 'footer' is set", () => {
    render(
      <PageContainer footer={<footer>Footer</footer>}>Content</PageContainer>
    )

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})
