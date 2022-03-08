import React from 'react'
import { render, screen } from '@testing-library/react'
import { Source } from './PageContainer.stories'

describe('Components/PageContainer', () => {
  it('should render nothing by default', () => {
    render(<Source />)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it("should render a <ContentContainer /> when 'children' is set", () => {
    const { container } = render(<Source>Content</Source>)
    expect(
      screen.getByText('Content', { selector: 'main > div' })
    ).toBeInTheDocument()
    expect(container.children.length).toEqual(1)
  })

  it("should render correctly when 'header' is set", () => {
    const { container } = render(
      <Source header={<header>Header</header>}>Content</Source>
    )
    expect(
      screen.getByText('Header', { selector: 'header' })
    ).toBeInTheDocument()
    expect(container.children.length).toEqual(2)
  })

  it("should render correctly when 'footer' is set", () => {
    const { container } = render(
      <Source footer={<footer>Footer</footer>}>Content</Source>
    )
    expect(
      screen.getByText('Footer', { selector: 'footer' })
    ).toBeInTheDocument()
    expect(container.children.length).toEqual(2)
  })
})
