import { ThemedElementProps } from '../Element'
import { SmartLinkProps } from '../SmartLink'

export interface ButtonProps
  extends SmartLinkProps,
    Omit<ThemedElementProps, 'as'> {
  active?: boolean
}

export interface ButtonGroupProps extends Omit<ThemedElementProps, 'as'> {}
