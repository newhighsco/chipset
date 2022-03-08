import React, { FC } from 'react'
import classNames from 'classnames'
import Element from '../Element'
import { ProseProps } from './Prose.types'

const Prose: FC<ProseProps> = ({
  html,
  children,
  theme,
  className,
  ...rest
}) => {
  if (!html && !children) return null

  return (
    <Element
      className={classNames(theme?.root, className)}
      {...(html && { dangerouslySetInnerHTML: { __html: html } })}
      {...rest}
    >
      {children}
    </Element>
  )
}

Prose.displayName = 'Prose'

export default Prose
