import { bool, node, oneOf, shape, string } from 'prop-types'
import React from 'react'

import { useToggle } from '../../hooks'
import { classNames } from '../../utils'
import SmartLink from '../SmartLink'

/**
 * Use `Tooltip` to present additional information about a specific element
 */
const Tooltip = ({
  hidden = true,
  manual = true,
  toggle,
  href,
  target,
  heading,
  children,
  align = 'center',
  valign = 'top',
  disabled,
  theme,
  className
}) => {
  const [visible, setVisibility] = useToggle(!hidden)

  if (!heading && !children) return null

  return (
    <span
      className={classNames(theme?.root, className)}
      {...(!manual && {
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
        disabled={disabled}
        aria-label="Toggle tooltip"
        {...(manual && { 'aria-expanded': visible, onClick: setVisibility })}
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
  manual: bool,
  toggle: node,
  href: string,
  target: string,
  heading: node,
  children: node,
  align: oneOf(['left', 'right', 'center']),
  valign: oneOf(['top', 'middle', 'bottom']),
  disabled: bool,
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
