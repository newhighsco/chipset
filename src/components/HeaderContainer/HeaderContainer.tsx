import React, { FC } from 'react'
import ContentContainer from '../ContentContainer'
import { HeaderContainerProps } from './HeaderContainer.types'

const HeaderContainer: FC<HeaderContainerProps> = props => {
  return <ContentContainer id="top" as="header" role="banner" {...props} />
}

HeaderContainer.displayName = 'HeaderContainer'

export default HeaderContainer
