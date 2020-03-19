import React from 'react'
import { func, node, object } from 'prop-types'
import { ContentContainer } from '../ContentContainer'

const PageContainer = ({ Header, Footer, children, theme }) => (
  <>
    <Header />
    <ContentContainer is="main" id="content" role="main" theme={theme}>
      {children}
    </ContentContainer>
    <Footer />
  </>
)

PageContainer.propTypes = {
  Header: func,
  Footer: func,
  children: node,
  theme: object
}

export { PageContainer }
