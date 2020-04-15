import React from 'react'
import { string } from 'prop-types'
import Element from '../Element'

import theme from './base.module.scss'

/**
 * Use `Backdrop` to add full-width image or video background to am element
 */
const Backdrop = ({ image, video, ...rest }) => {
  if (!image && !video) return null

  const props = {
    ...(image && {
      style: { backgroundImage: `url(${image})` }
    }),
    ...(video && {
      as: 'video',
      src: video,
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true
    })
  }

  return <Element className={theme.wrapper} {...props} {...rest} />
}

Backdrop.propTypes = {
  image: string,
  video: string
}

export default Backdrop
export { Backdrop }
