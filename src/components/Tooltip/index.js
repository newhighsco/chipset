import { withTheme } from '../../providers'
import PureTooltip from './Tooltip'
import theme from './Tooltip.module.scss'

const { displayName } = PureTooltip
const Tooltip = withTheme(displayName, theme)(PureTooltip)

Tooltip.displayName = displayName

export default Tooltip
