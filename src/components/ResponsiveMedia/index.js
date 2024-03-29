import { withTheme } from '../../providers'
import PureResponsiveMedia from './ResponsiveMedia'
import theme from './ResponsiveMedia.module.scss'

const { displayName } = PureResponsiveMedia
const ResponsiveMedia = withTheme(displayName, theme)(PureResponsiveMedia)

ResponsiveMedia.displayName = displayName

export default ResponsiveMedia
