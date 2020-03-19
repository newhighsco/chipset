import React from 'react'
import { func, node, oneOfType, string } from 'prop-types'

const Element = ({ is = 'div', ...rest }) => {
  const Component = is

  return <Component {...rest} />
}

Element.propTypes = {
  is: oneOfType([func, string]),
  children: node
}

export default Element
export { Element }
