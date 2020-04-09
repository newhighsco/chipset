import React, { forwardRef } from 'react'
import { SmartLink } from './SmartLink'

const WithRef = forwardRef((props, ref) => {
  return <SmartLink {...props} setRef={ref} />
})

export default WithRef
export { WithRef as SmartLink }
