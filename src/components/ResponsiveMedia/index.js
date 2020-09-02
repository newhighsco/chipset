import { withTheme } from '../../providers'
import { PROSE } from '../identifiers'
import PureResponsiveMedia from './ResponsiveMedia'

import theme from './ResponsiveMedia.module.scss'

const ResponsiveMedia = withTheme(PROSE, theme)(PureResponsiveMedia)

export default ResponsiveMedia
