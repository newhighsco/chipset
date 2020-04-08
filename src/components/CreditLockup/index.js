import { withTheme } from '../../providers'
import { CREDIT_LOCKUP } from '../identifiers'
import { CreditLockup } from './CreditLockup'

import theme from './base.module.scss'

const WithTheme = withTheme(CREDIT_LOCKUP, theme)(CreditLockup)

export default WithTheme
export { WithTheme as CreditLockup }
