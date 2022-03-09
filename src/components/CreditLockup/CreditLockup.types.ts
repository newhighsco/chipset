import { ThemedElementProps } from '../Element'

export interface CreditLockupProps
  extends Omit<ThemedElementProps, 'as' | 'children'> {
  align?: 'left' | 'right' | 'center'
  dir?: 'ltr' | 'rtl'
}
