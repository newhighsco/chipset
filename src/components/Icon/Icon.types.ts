import { ThemedElementProps } from '../Element'

export interface IconProps extends Omit<ThemedElementProps, 'as'> {
  height?: number
  width?: number
  alt?: string
}
