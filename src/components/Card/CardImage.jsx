import React from 'react'
import { number, object, oneOfType, string } from 'prop-types'
import Image from '../Image'
import ResponsiveMedia from '../ResponsiveMedia'

const CardImage = ({ src, ratio, theme, ...rest }) => {
  if (!src) return null

  return (
    <ResponsiveMedia ratio={ratio} className={theme?.image}>
      <Image src={src} {...rest} />
    </ResponsiveMedia>
  )
}

CardImage.propTypes = {
  src: string,
  alt: string,
  ratio: oneOfType([number, string]),
  theme: object
}

export default CardImage
