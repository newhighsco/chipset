import { render } from '@testing-library/react'
import React from 'react'

import Element from './Element'

describe('Components/Element', () => {
  it('should render <div /> by default', () => {
    const { container } = render(<Element />)

    expect(container.firstChild.tagName).toEqual('DIV')
  })

  it("should render the correct component when 'as' is set", () => {
    const { container } = render(<Element as="span" />)

    expect(container.firstChild.tagName).toEqual('SPAN')
  })
})
