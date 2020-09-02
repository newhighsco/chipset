import { withTheme } from '../../providers'
import { PROSE } from '../identifiers'
import PureProse from './Prose'

import theme from './Prose.module.scss'

const Prose = withTheme(PROSE, theme)(PureProse)

export default Prose
