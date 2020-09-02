import React from 'react'
import { func, node, number, object, oneOfType, string } from 'prop-types'
import classNames from 'classnames'

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
  theme,
  className,
  style,
  ...rest
}) => {
  if (!children) return null

  const parsedRatio = parseRatio(ratio)

  return (
    <div
      className={classNames(theme?.wrapper, className)}
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
  theme: object,
  className: string,
  style: object
}

export default ResponsiveMedia
