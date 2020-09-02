import React from 'react'
import { node, shape, string } from 'prop-types'
import ContentContainer from '../ContentContainer'

/**
 * The `PageContainer` flexes to fill the unused space within its parent
 */
const PageContainer = ({ header, footer, children, theme, ...rest }) => {
  if (!children) return null

  return (
    <>
      {header}
      <ContentContainer theme={theme} {...rest}>
        {children}
      </ContentContainer>
      {footer}
    </>
  )
}

PageContainer.propTypes = {
  header: node,
  footer: node,
  children: node,
  theme: shape({ wrapper: string })
}

export default PageContainer
