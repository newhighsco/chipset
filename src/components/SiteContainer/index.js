import { withTheme } from '../../providers'
import PureSiteContainer from './SiteContainer'

import theme from './SiteContainer.module.scss'

const { displayName } = PureSiteContainer
const SiteContainer = withTheme(displayName, theme)(PureSiteContainer)

SiteContainer.displayName = displayName

export default SiteContainer
