import { bool, func, node, object, oneOf, oneOfType, string } from 'prop-types'
import React from 'react'

import { useLink } from '../../providers'
import { absoluteUrl } from '../../utils'

/**
 * Use `SmartLink` to automatically render an button, internal anchor, or outbound link
 */
const SmartLink = ({
  href,
  target,
  disabled,
  type = 'button',
  setRef,
  children,
  className,
  ...rest
}) => {
  const renderLink = useLink()

  if (!children) return null

  if (!href) {
    return (
      <button
        ref={setRef}
        className={className}
        disabled={disabled}
        type={type}
        {...rest}
      >
        {children}
      </button>
    )
  }

  if (disabled) {
    const { role = 'link' } = rest

    return (
      <a ref={setRef} className={className} role={role} aria-disabled="true">
        {children}
      </a>
    )
  }

  if (absoluteUrl(href)) {
    return (
      <a
        ref={setRef}
        className={className}
        href={href}
        target={target}
        {...(target === '_blank' && { rel: 'noopener noreferrer' })}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return renderLink({ ref: setRef, className, href, children, ...rest })
}

SmartLink.displayName = 'SmartLink'
SmartLink.propTypes = {
  href: string,
  target: string,
  disabled: bool,
  type: oneOf(['button', 'reset', 'submit']),
  setRef: oneOfType([func, object]),
  children: node,
  className: string
}

export default SmartLink
