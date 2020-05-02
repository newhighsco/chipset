import React from 'react'
import { node, number, oneOfType, string } from 'prop-types'
import classNames from 'classnames'

import styles from './index.module.scss'

const ratioRegExp = /^\d+:\d+$/

const parseRatio = ratio => {
  if (ratioRegExp.exec(ratio)) {
    const ratioParts = ratio.split(':')

    ratio = ratioParts[1] / ratioParts[0]
  }

  return parseFloat((ratio * 100).toFixed(4))
}

/**
 * Use `ResponsiveMedia` to reserves a space on page for slow-loading resources, using the supplied ratio. Avoids document reflow when child elements load.
 */
const ResponsiveMedia = ({ ratio, children, className }) => {
  if (!children) return null

  const parsedRatio = parseRatio(ratio)

  return (
    <div
      className={classNames(styles.wrapper, className)}
      style={parsedRatio && { paddingBottom: `${parsedRatio}%` }}
    >
      {children}
    </div>
  )
}

ResponsiveMedia.propTypes = {
  /**
   *  `{ 9 / 16 }` | `"16:9"`
   */
  ratio: oneOfType([number, string]),
  children: node,
  className: string
}

export default ResponsiveMedia
export { ResponsiveMedia }
