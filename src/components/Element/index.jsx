import React from 'react'
import { func, node, oneOfType, string } from 'prop-types'

const Element = ({ as: Component = 'div', ...rest }) => <Component {...rest} />

Element.propTypes = {
  as: oneOfType([func, string]),
  children: node
}

export default Element
export { Element }
