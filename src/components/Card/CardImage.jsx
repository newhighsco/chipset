import { func, number, object, oneOfType, string } from 'prop-types'
import React from 'react'

import Image from '../Image'
import ResponsiveMedia from '../ResponsiveMedia'

const renderImage = ({ render, src, ...rest }) => {
  if (render) return render()
  if (!src) return null

  return <Image src={src} {...rest} />
}

const CardImage = ({ ratio, theme, ...rest }) => {
  const image = renderImage({ ...rest })

  if (!image) return null

  return (
    <ResponsiveMedia ratio={ratio} className={theme?.image}>
      {image}
    </ResponsiveMedia>
  )
}

CardImage.propTypes = {
  render: func,
  src: string,
  alt: string,
  ratio: oneOfType([number, string]),
  theme: object
}

export default CardImage
