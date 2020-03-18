import React from 'react'
import { func, node, object, string } from 'prop-types'
import classNames from 'classnames'

import { ContentContainer } from '../'
// import { Landmark } from '../../molecules'

import { wrapper, inner } from './PageContainer.module.scss'

const PageContainer = ({ Header, Footer, children, className, theme = {} }) => (
  <>
    {/* <Landmark id="top" a11yText="Top of page" /> */}
    <Header />
    <main
      id="content"
      className={classNames(wrapper, className, theme.wrapper)}
      role="main"
    >
      <ContentContainer className={classNames(inner, theme.inner)}>
        {children}
      </ContentContainer>
    </main>
    <Footer />
  </>
)

PageContainer.propTypes = {
  Header: func,
  Footer: func,
  children: node,
  className: string,
  theme: object
}

export { PageContainer }
