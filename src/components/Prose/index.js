import { withTheme } from '../../providers'
import PureProse from './Prose'

import theme from './Prose.module.scss'

const { displayName } = PureProse
const Prose = withTheme(displayName, theme)(PureProse)

export default Prose
