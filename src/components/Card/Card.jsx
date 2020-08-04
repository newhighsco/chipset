import React from 'react'
import { node, number, object, oneOfType, shape, string } from 'prop-types'
import classNames from 'classnames'
import { ResponsiveMedia } from '../ResponsiveMedia'
import { SmartLink } from '../SmartLink'

/**
 * The `Card` contains content and actions about a single subject
 */
const Card = ({ href, target, image, heading, children, theme, className }) => {
  if (!image && !heading && !children) return null

  return (
    <div
      className={classNames(theme?.wrapper, className)}
      {...(href && { role: 'link' })}
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
    wrapper: string,
    image: string,
    content: string,
    heading: string,
    copy: string
  }),
  className: string
}

const CardImage = ({ src, alt = '', ratio, theme, ...rest }) => {
  if (!src) return null

  return (
    <ResponsiveMedia ratio={ratio} className={theme?.image}>
      <img src={src} alt={alt} loading="lazy" {...rest} />
    </ResponsiveMedia>
  )
}

CardImage.propTypes = {
  src: string,
  alt: string,
  ratio: oneOfType([number, string]),
  theme: object
}

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

export { Card, CardImage, CardHeading }
