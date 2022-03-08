import React from 'react'

export interface ElementProps {
  as?: React.ElementType
  className?: string
}

export interface ThemedElementProps extends ElementProps {
  theme?: any
}
