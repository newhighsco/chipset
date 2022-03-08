import { ThemedElementProps } from '../Element'

export interface ContentContainerProps extends ThemedElementProps {
  size?:
    | 'mobile'
    | 'mobileLandscape'
    | 'tablet'
    | 'tabletLandscape'
    | 'desktop'
    | 'desktopMedium'
    | 'desktopLarge'
  gutter?: boolean
}
