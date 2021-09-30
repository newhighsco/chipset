import React from 'react'
import { node } from 'prop-types'
import ContentContainer from '../ContentContainer'

const HeaderContainer = ({ children, theme, ...rest }) => {
  if (!children) return null

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
