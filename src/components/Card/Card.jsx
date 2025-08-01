import {
  func,
  node,
  number,
  object,
  oneOfType,
  shape,
  string
} from 'prop-types'
import React from 'react'

import { classNames } from '../../utils'
import CardHeading from './CardHeading'
import CardImage from './CardImage'

/**
 * The `Card` contains content and actions about a single subject
 */
const Card = ({
  href,
  target,
  image,
  heading,
  children,
  theme,
  className,
  setRef,
  ...rest
}) => {
  if (!image && !heading && !children) return null

  return (
    <div
      className={classNames(theme?.root, className)}
      ref={setRef}
      {...(href && { role: 'link' })}
      {...rest}
    >
      <CardImage {...image} theme={theme} />
      {(heading || children) && (
        <div className={theme?.content}>
          <CardHeading href={href} target={target} theme={theme}>
            {heading}
          </CardHeading>
          {children && <div className={theme?.copy}>{children}</div>}
        </div>
      )}
    </div>
  )
}

Card.displayName = 'Card'
Card.propTypes = {
  href: string,
  target: string,
  image: shape({
    src: string,
    ratio: oneOfType([number, string])
  }),
  heading: node,
  children: node,
  theme: shape({
    root: string,
    image: string,
    content: string,
    heading: string,
    copy: string
  }),
  setRef: oneOfType([func, object]),
  className: string
}

export default Card
