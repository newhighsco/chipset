import { bool, node, oneOf, shape, string } from 'prop-types'
import React, { useId } from 'react'

import { useToggle } from '../../hooks'
import { classNames } from '../../utils'
import SmartLink from '../SmartLink'

/**
 * Use `Tooltip` to present additional information about a specific element
 */
const Tooltip = ({
  role = 'tooltip',
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
  const id = useId()

  if (!heading && !children) return null

  return (
    <span
      role={role}
      aria-describedby={id}
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
        aria-expanded={visible}
        {...(manual && { onClick: setVisibility })}
      >
        {toggle}
      </SmartLink>
      {(heading || children) && (
        <span
          id={id}
          className={classNames(
            theme?.content,
            align && theme?.[align],
            valign && theme?.[valign]
          )}
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
  role: string,
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
