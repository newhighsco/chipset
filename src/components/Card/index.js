import { withTheme } from '../../providers'
import PureCard from './Card'

import theme from './Card.module.scss'

const { displayName } = PureCard
const Card = withTheme(displayName, theme)(PureCard)

export default Card
