import React, { FC } from 'react'
import ContentContainer from '../ContentContainer'
import { FooterContainerProps } from './FooterContainer.types'

const FooterContainer: FC<FooterContainerProps> = props => {
  return <ContentContainer as="footer" role="contentinfo" {...props} />
}

FooterContainer.displayName = 'FooterContainer'

export default FooterContainer
