import { withTheme } from '../../providers'
import { SITE_CONTAINER } from '../identifiers'
import PureSiteContainer from './SiteContainer'

import theme from './SiteContainer.module.scss'

const SiteContainer = withTheme(SITE_CONTAINER, theme)(PureSiteContainer)

export default SiteContainer
