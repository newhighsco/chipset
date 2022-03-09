import React, { forwardRef } from 'react'
import PureSmartLink from './SmartLink'
import { SmartLinkProps } from './SmartLink.types'

const { displayName } = PureSmartLink
const SmartLink = forwardRef<typeof PureSmartLink, SmartLinkProps>(
  (props, ref) => {
    return <PureSmartLink {...props} setRef={ref} />
  }
)

SmartLink.displayName = displayName

export default SmartLink
export type { SmartLinkProps }
