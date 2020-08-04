import { withTheme } from '../../providers'
import { CARD } from '../identifiers'
import { Card } from './Card'

import theme from './Card.module.scss'

const WithTheme = withTheme(CARD, theme)(Card)

export default WithTheme
export { WithTheme as Card }
