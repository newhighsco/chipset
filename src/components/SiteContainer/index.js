import { withTheme } from '../../providers'
import { SITE_CONTAINER } from '../identifiers'
import { SiteContainer } from './SiteContainer'

import theme from './SiteContainer.module.scss'

const WithTheme = withTheme(SITE_CONTAINER, theme)(SiteContainer)

export default WithTheme
export { WithTheme as SiteContainer }
