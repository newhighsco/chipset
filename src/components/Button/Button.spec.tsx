import React, { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import ButtonWithRef from '.'
import { Source } from './Button.stories'

describe('Components/Button', () => {
  it('should render nothing by default', () => {
    render(<Source />)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it("should render a <SmartLink /> when 'children' is set", () => {
    render(<Source {...Source.args} />)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <Source
        {...Source.args}
        theme={{ root: 'root', active: 'active' }}
        active
        className="className"
      />
    )
    expect(container.firstChild).toHaveClass('root active className')
  })

  it('should forward ref', () => {
    const ref = createRef()
    render(<ButtonWithRef {...Source.args} href={undefined} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
