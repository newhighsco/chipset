import { withTheme } from '../../providers'
import PureCreditLockup from './CreditLockup'

import theme from './CreditLockup.module.scss'

const { displayName } = PureCreditLockup
const CreditLockup = withTheme(displayName, theme)(PureCreditLockup)

CreditLockup.displayName = displayName

export default CreditLockup
