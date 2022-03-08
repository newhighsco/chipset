import React from 'react'
import { ContentContainerProps } from '../ContentContainer'

export interface PageContainerProps extends ContentContainerProps {
  header?: React.ReactNode
  footer?: React.ReactNode
}
