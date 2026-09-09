import { func, node, object, oneOfType, string } from 'prop-types'
import React from 'react'

import SmartLink from '../SmartLink'

const CardHeading = ({
  href,
  target,
  renderLink = props => <SmartLink {...props} />,
  children,
  theme
}) => {
  if (!children) return null

  return (
    <div className={theme?.heading}>
      {href ? renderLink({ href, target, children }) : children}
    </div>
  )
}

CardHeading.propTypes = {
  href: string,
  target: string,
  children: node,
  ref: oneOfType([func, object]),
  renderLink: func,
  theme: object
}

export default CardHeading
