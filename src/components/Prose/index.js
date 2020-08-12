import { withTheme } from '../../providers'
import { PROSE } from '../identifiers'
import { Prose } from './Prose'

import theme from './Prose.module.scss'

const WithTheme = withTheme(PROSE, theme)(Prose)

export default WithTheme
export { WithTheme as Prose }
