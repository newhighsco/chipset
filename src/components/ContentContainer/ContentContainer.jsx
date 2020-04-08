import React from 'react'
import { bool, node, shape, string } from 'prop-types'
import classNames from 'classnames'
import { Element } from '../Element'

const ContentContainer = ({ fullWidth, gutter, children, theme, ...rest }) => {
  if (!children) return null

  return (
    <Element
      className={classNames(
        theme.wrapper,
        fullWidth && theme.fullWidth,
        gutter && theme.gutter
      )}
      {...rest}
    >
      <div className={theme.content}>{children}</div>
    </Element>
  )
}

ContentContainer.propTypes = {
  fullWidth: bool,
  gutter: bool,
  children: node,
  theme: shape({ wrapper: string, fullWidth: string, gutter: string })
}

export { ContentContainer }
