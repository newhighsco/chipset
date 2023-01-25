import React, { forwardRef } from 'react'

import { withTheme } from '../../providers'
import PureCard from './Card'
import theme from './Card.module.scss'

const { displayName } = PureCard
const CardWithRef = forwardRef((props, ref) => (
  <PureCard {...props} setRef={ref} />
))
const Card = withTheme(displayName, theme)(CardWithRef)

Card.displayName = displayName

export default Card
