import { node } from 'prop-types'
import React from 'react'

import ContentContainer from '../ContentContainer'

const FooterContainer = ({ children, theme, ...rest }) => {
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
