import { ThemedElementProps } from '../Element'

export interface ListProps extends ThemedElementProps {
  as?: 'ul' | 'ol'
  unstyled?: boolean
  inline?: boolean
  commaSeparated?: boolean
}
