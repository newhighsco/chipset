import React from 'react'
import { node, shape, string } from 'prop-types'
import { ContentContainer } from '../ContentContainer'

const PageContainer = ({ header, footer, children, theme, ...rest }) => (
  <>
    {header}
    <ContentContainer theme={theme} {...rest}>
      {children}
    </ContentContainer>
    {footer}
  </>
)

PageContainer.propTypes = {
  header: node,
  footer: node,
  children: node,
  theme: shape({ wrapper: string })
}

export { PageContainer }
