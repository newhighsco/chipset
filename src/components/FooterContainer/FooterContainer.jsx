import React from 'react'
import { node } from 'prop-types'
import ContentContainer from '../ContentContainer'

const FooterContainer = ({ children, theme, ...rest }) => {
  if (!children) return null

  return (
    <ContentContainer as="footer" role="contentinfo" theme={theme} {...rest}>
      {children}
    </ContentContainer>
  )
}

FooterContainer.displayName = 'FooterContainer'
FooterContainer.propTypes = {
  children: node,
  theme: ContentContainer.propTypes.theme
}

export default FooterContainer
