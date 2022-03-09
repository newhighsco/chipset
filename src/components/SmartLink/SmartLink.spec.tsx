import React, { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import SmartLinkWithRef from '.'
import { Source } from './SmartLink.stories'

describe('Components/SmartLink', () => {
  it('should render nothing by default', () => {
    render(<Source />)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it("should render a <button /> when no 'href' is set", () => {
    const { container } = render(<Source {...Source.args} href={undefined} />)
    expect(screen.queryByText('Content')).toBeInTheDocument()
    expect(container.firstChild.nodeName).toEqual('BUTTON')
  })

  it("should render an <a /> when internal 'href' is set", () => {
    const { container } = render(
      <Source {...Source.args} href="/" target="_blank" />
    )
    expect(screen.queryByText('Content')).toBeInTheDocument()
    expect(container.firstChild.nodeName).toEqual('A')
    expect(container.firstChild).not.toHaveAttribute('target')
    expect(container.firstChild).not.toHaveAttribute('rel')
  })

  it("should add 'rel=noopener noreferrer' when external 'href' and 'target=blank' is set", () => {
    const { container } = render(<Source {...Source.args} target="_blank" />)
    expect(screen.queryByText('Content')).toBeInTheDocument()
    expect(container.firstChild.nodeName).toEqual('A')
    expect(container.firstChild).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should forward ref', () => {
    const ref = createRef()
    render(<SmartLinkWithRef {...Source.args} href={undefined} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
