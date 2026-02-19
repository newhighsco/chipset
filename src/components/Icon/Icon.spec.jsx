import { composeStories } from '@storybook/react-webpack5'
import { render, screen } from '@testing-library/react'
import React from 'react'

import { ImageSvg } from '../../__mocks__/fixtures'
import Icon from './Icon'
import * as stories from './Icon.stories'

const { Accessible, Decorative } = composeStories(stories)

describe('Components/Icon', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Icon />)

    expect(container.firstChild).toBeNull()
  })

  it("should render as hidden when 'name' or 'children' is set", async () => {
    const { rerender } = render(<Decorative id="icon" />)

    const icon = screen.getByTestId('icon')

    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('aria-hidden')

    rerender(
      <Decorative>
        <ImageSvg id="child" />
      </Decorative>
    )

    const child = screen.getByTestId('child')

    expect(child).toBeInTheDocument()
    expect(child).toHaveAttribute('aria-hidden')
  })

  it("should not render an hidden when 'alt' is set", async () => {
    const { rerender } = render(<Accessible id="icon" />)

    const icon = screen.getByRole('img', { name: 'Alt text' })

    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('id', 'icon')
    expect(icon).not.toHaveAttribute('aria-hidden')

    rerender(
      <Accessible>
        <ImageSvg id="child" />
      </Accessible>
    )

    const child = screen.getByRole('img', { name: 'Alt text' })

    expect(child).toBeInTheDocument()
    expect(child).toHaveAttribute('id', 'child')
    expect(child).not.toHaveAttribute('aria-hidden')
  })

  it('should set correct classNames and styles', () => {
    render(
      <Icon
        id="icon"
        className="foo"
        theme={{ root: 'root' }}
        width={20}
        height="10px"
        style={{ color: 'red' }}
      >
        <ImageSvg />
      </Icon>
    )

    const icon = screen.getByTestId('icon')

    expect(icon).toHaveClass('root foo', { exact: true })
    expect(icon).toHaveStyle({
      width: '20px',
      height: '10px',
      color: 'rgb(255, 0, 0)'
    })
  })
})
