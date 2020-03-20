import React from 'react'
import { node, object } from 'prop-types'
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
  theme: object
}

export { PageContainer }
