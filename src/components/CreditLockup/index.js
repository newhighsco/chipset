import { withTheme } from '../../providers'
import { CREDIT_LOCKUP } from '../identifiers'
import PureCreditLockup from './CreditLockup'

import theme from './CreditLockup.module.scss'

const CreditLockup = withTheme(CREDIT_LOCKUP, theme)(PureCreditLockup)

export default CreditLockup
