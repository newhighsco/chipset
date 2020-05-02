import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'
import Element from '../Element'

import styles from './index.module.scss'

/**
 * Use `Backdrop` to add full-width image or video background to am element
 */
const Backdrop = ({ image, video, className, ...rest }) => {
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
  className: string
}

export default Backdrop
export { Backdrop }
