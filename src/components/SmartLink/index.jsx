import React, { forwardRef } from 'react'
import { node, oneOf, string } from 'prop-types'
import { OutboundLink } from 'react-ga'
import { absoluteUrl } from '../../utils'

const SmartLink = forwardRef(
  ({ href, target, eventLabel, type, children, className, ...rest }, ref) => {
    if (!children) return null

    if (!href) {
      return (
        <button ref={ref} className={className} type={type} {...rest}>
          {children}
        </button>
      )
    }

    if (absoluteUrl(href)) {
      return (
        <OutboundLink
          ref={ref}
          className={className}
          to={href}
          eventLabel={eventLabel || href}
          {...(target && { target })}
          {...(target === '_blank' && { rel: 'noopener noreferrer' })}
          {...rest}
        >
          {children}
        </OutboundLink>
      )
    }

    return (
      <a ref={ref} className={className} href={href} {...rest}>
        {children}
      </a>
    )
  }
)

SmartLink.defaultProps = {
  type: 'button'
}

SmartLink.propTypes = {
  href: string,
  target: string,
  eventLabel: string,
  type: oneOf(['button', 'reset', 'submit']),
  children: node,
  className: string
}

export default SmartLink
export { SmartLink }
