import { withTheme } from '../../providers'
import { CARD } from '../identifiers'
import PureCard from './Card'

import theme from './Card.module.scss'

const Card = withTheme(CARD, theme)(PureCard)

export default Card
