import React, { FC } from 'react'
import { absoluteUrl } from '../../utils'
import { SmartLinkProps } from './SmartLink.types'

/**
 * Use `SmartLink` to automatically render an button, internal anchor, or outbound link
 */
const SmartLink: FC<SmartLinkProps> = ({
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

export default SmartLink
