import { node } from 'prop-types'
import React from 'react'

import ContentContainer from '../ContentContainer'

const HeaderContainer = ({ children, theme, ...rest }) => {
  return (
    <ContentContainer
      id="top"
      as="header"
      role="banner"
      theme={theme}
      {...rest}
    >
      {children}
    </ContentContainer>
  )
}

HeaderContainer.displayName = 'HeaderContainer'
HeaderContainer.propTypes = {
  children: node,
  theme: ContentContainer.propTypes.theme
}

export default HeaderContainer
