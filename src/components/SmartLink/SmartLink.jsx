import React from 'react'
import { func, node, object, oneOf, oneOfType, string } from 'prop-types'
import { absoluteUrl } from '../../utils'

/**
 * Use `SmartLink` to automatically render an button, internal anchor, or outbound link
 */
const SmartLink = ({
  href,
  target,
  type = 'button',
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

  return (
    <a ref={setRef} className={className} href={href} {...rest}>
      {children}
    </a>
  )
}

SmartLink.displayName = 'SmartLink'
SmartLink.propTypes = {
  href: string,
  target: string,
  type: oneOf(['button', 'reset', 'submit']),
  setRef: oneOfType([func, object]),
  children: node,
  className: string
}

export default SmartLink
