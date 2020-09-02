import React, { forwardRef } from 'react'
import PureSmartLink from './SmartLink'

const SmartLink = forwardRef((props, ref) => {
  return <PureSmartLink {...props} setRef={ref} />
})

export default SmartLink
