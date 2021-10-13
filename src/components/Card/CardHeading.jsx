import React from 'react'
import { func, node, object, oneOfType, string } from 'prop-types'
import SmartLink from '../SmartLink'

const CardHeading = ({ href, target, children, ref, theme }) => {
  if (!children) return null

  return (
    <div className={theme?.heading}>
      {href ? (
        <SmartLink href={href} target={target}>
          {children}
        </SmartLink>
      ) : (
        children
      )}
    </div>
  )
}

CardHeading.propTypes = {
  href: string,
  target: string,
  children: node,
  ref: oneOfType([func, object]),
  theme: object
}

export default CardHeading
