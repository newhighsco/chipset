import React from 'react'
import { node, object, string } from 'prop-types'
import SmartLink from '../SmartLink'

const CardHeading = ({ href, target, children, theme }) => {
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
  theme: object
}

export default CardHeading
