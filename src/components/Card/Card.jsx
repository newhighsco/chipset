import React from 'react'
import { node, number, oneOfType, shape, string } from 'prop-types'
import classNames from 'classnames'
import { ResponsiveMedia } from '../ResponsiveMedia'
import { Element } from '../Element'
import { SmartLink } from '../SmartLink'

/**
 * The `Card` contains content and actions about a single subject
 */
const Card = ({ image, heading, children, theme, className }) => {
  if (!image && !heading && !children) return null

  return (
    <div
      className={classNames(theme?.wrapper, className)}
      {...(heading?.text && heading?.href && { role: 'link' })}
    >
      <CardImage {...image} theme={theme} />
      {(heading || children) && (
        <div className={theme?.content}>
          <CardHeading {...heading} theme={theme} />
          {children && <div className={theme?.copy}>{children}</div>}
        </div>
      )}
    </div>
  )
}

Card.propTypes = {
  image: shape({ src: string, ratio: oneOfType([number, string]) }),
  heading: shape({ text: string, href: string, target: string }),
  children: node,
  theme: shape({
    wrapper: string,
    image: string,
    heading: string,
    content: string
  }),
  className: string
}

const CardImage = ({ src, alt, ratio, theme }) => {
  if (!src) return null

  return (
    <ResponsiveMedia ratio={ratio} className={theme?.image}>
      <img src={src} alt={alt} loading="lazy" />
    </ResponsiveMedia>
  )
}

CardImage.propTypes = {
  src: string,
  alt: string,
  ratio: oneOfType([number, string]),
  theme: shape({
    image: string
  })
}

const CardHeading = ({ text, href, target, as = 'h2', theme }) => {
  if (!text) return null

  return (
    <Element as={as} className={theme?.heading}>
      {href ? (
        <SmartLink href={href} target={target}>
          {text}
        </SmartLink>
      ) : (
        text
      )}
    </Element>
  )
}

CardHeading.propTypes = {
  as: string,
  text: string,
  href: string,
  target: string,
  theme: shape({
    title: string
  })
}

export { Card, CardImage, CardHeading }
