import React from 'react'
import { bool, string } from 'prop-types'
import classNames from 'classnames'
import Element from '../Element'

import styles from './index.module.scss'

/**
 * Use `Backdrop` to add full-width image or video background to the viewport
 */
const Backdrop = ({
  image,
  video,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  className,
  ...rest
}) => {
  if (!image && !video) return null

  const props = {
    ...(image && {
      style: { backgroundImage: `url(${image})` }
    }),
    ...(video && {
      as: 'video',
      src: video,
      autoPlay,
      loop,
      muted,
      playsInline
    })
  }

  return (
    <Element
      className={classNames(styles.wrapper, className)}
      {...props}
      {...rest}
    />
  )
}

Backdrop.propTypes = {
  image: string,
  video: string,
  autoPlay: bool,
  loop: bool,
  muted: bool,
  playsInline: bool,
  className: string
}

export default Backdrop
export { Backdrop }
