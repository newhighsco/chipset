import React from 'react'
import { bool, node, oneOf, shape, string } from 'prop-types'
import classNames from 'classnames'
import { useToggle } from '../../hooks'
import SmartLink from '../SmartLink'

/**
 * Use `Tooltip` to present additional information about a specific element
 */
const Tooltip = ({
  hidden = true,
  toggle,
  href,
  target,
  automatic,
  heading,
  children,
  align = 'center',
  valign = 'top',
  theme,
  className
}) => {
  if (!heading && !children) return null

  const [visible, setVisibility] = useToggle(!hidden)

  return (
    <span
      className={classNames(theme?.root, className)}
      {...(automatic && {
        onMouseOver: setVisibility,
        onMouseOut: setVisibility,
        onFocus: setVisibility,
        onBlur: setVisibility,
        onTouchEnd: setVisibility
      })}
    >
      <SmartLink
        className={classNames(theme?.toggle, visible && theme?.toggleActive)}
        href={href}
        target={target}
        aria-label="Toggle tooltip"
        {...(!automatic && {
          'aria-expanded': visible,
          onClick: setVisibility
        })}
      >
        {toggle}
      </SmartLink>
      {(heading || children) && (
        <span
          className={classNames(
            theme?.content,
            align && theme?.[align],
            valign && theme?.[valign]
          )}
          hidden={!visible}
        >
          {heading && <span className={theme?.heading}>{heading}</span>}
          {children && <span className={theme?.copy}>{children}</span>}
        </span>
      )}
    </span>
  )
}

Tooltip.displayName = 'Tooltip'
Tooltip.propTypes = {
  hidden: bool,
  toggle: node,
  href: string,
  target: string,
  automatic: bool,
  heading: node,
  children: node,
  align: oneOf(['left', 'right', 'center']),
  valign: oneOf(['top', 'middle', 'bottom']),
  theme: shape({
    root: string,
    toggle: string,
    toggleActive: string,
    content: string,
    heading: string,
    copy: string
  }),
  className: string
}

export default Tooltip
