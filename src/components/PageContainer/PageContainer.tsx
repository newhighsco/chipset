import React, { FC } from 'react'
import ContentContainer from '../ContentContainer'
import { PageContainerProps } from './PageContainer.types'

/**
 * The `PageContainer` flexes to fill the unused space within its parent
 */
const PageContainer: FC<PageContainerProps> = ({
  header,
  footer,
  children,
  ...rest
}) => {
  if (!children) return null

  return (
    <>
      {header}
      <ContentContainer as="main" id="content" role="main" {...rest}>
        {children}
      </ContentContainer>
      {footer}
    </>
  )
}

PageContainer.displayName = 'PageContainer'

export default PageContainer
