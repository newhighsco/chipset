import React, { forwardRef } from 'react'
import PureSmartLink from './SmartLink'

const { displayName } = PureSmartLink
const SmartLink = forwardRef((props, ref) => {
  return <PureSmartLink {...props} setRef={ref} />
})

SmartLink.displayName = displayName

export default SmartLink
