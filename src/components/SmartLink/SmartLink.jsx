import React from 'react'
import { func, node, object, oneOf, oneOfType, string } from 'prop-types'
import { OutboundLink } from 'react-ga'
import { absoluteUrl } from '../../utils'

/**
 * Use `SmartLink` to automatically render an button, internal anchor, or outbound link
 */
const SmartLink = ({
  href,
  target,
  eventLabel,
  type,
  setRef,
  children,
  className,
  ...rest
}) => {
  if (!children) return null

  if (!href) {
    return (
      <button ref={setRef} className={className} type={type} {...rest}>
        {children}
      </button>
    )
  }

  if (absoluteUrl(href)) {
    return (
      <OutboundLink
        ref={setRef}
        className={className}
        to={href}
        eventLabel={eventLabel ?? href}
        target={target}
        {...(target === '_blank' && { rel: 'noopener noreferrer' })}
        {...rest}
      >
        {children}
      </OutboundLink>
    )
  }

  return (
    <a ref={setRef} className={className} href={href} {...rest}>
      {children}
    </a>
  )
}

SmartLink.defaultProps = {
  type: 'button'
}

SmartLink.propTypes = {
  href: string,
  target: string,
  eventLabel: string,
  type: oneOf(['button', 'reset', 'submit']),
  setRef: oneOfType([func, object]),
  children: node,
  className: string
}

export { SmartLink }
