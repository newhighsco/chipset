import React from 'react'
import { func, node, number, object, oneOfType, string } from 'prop-types'
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
const ResponsiveMedia = ({
  ratio,
  setRef,
  children,
  className,
  style,
  ...rest
}) => {
  if (!children) return null

  const parsedRatio = parseRatio(ratio)

  return (
    <div
      className={classNames(styles.wrapper, className)}
      style={{
        ...style,
        ...(parsedRatio && { paddingBottom: `${parsedRatio}%` })
      }}
      ref={setRef}
      {...rest}
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
  setRef: oneOfType([func, object]),
  children: node,
  className: string,
  style: object
}

export default ResponsiveMedia
export { ResponsiveMedia }
