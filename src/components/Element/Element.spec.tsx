import React from 'react'
import { render, screen } from '@testing-library/react'
import { Element } from '..'

describe('Components/Element', () => {
  it('should render <div /> by default', () => {
    render(<Element>Content</Element>)
    expect(screen.getByText('Content', { selector: 'div' })).toBeInTheDocument()
  })

  it("should render the correct component when 'as' is set", () => {
    render(<Element as="span">Content</Element>)
    expect(
      screen.getByText('Content', { selector: 'span' })
    ).toBeInTheDocument()
  })
})
