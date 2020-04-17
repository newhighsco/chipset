import { withTheme, withWindowHeight } from '../../providers'
import { SITE_CONTAINER } from '../identifiers'
import { SiteContainer } from './SiteContainer'

import theme from './SiteContainer.module.scss'

const WithWindowHeight = withWindowHeight(SiteContainer)
const WithTheme = withTheme(SITE_CONTAINER, theme)(WithWindowHeight)

export default WithTheme
export { WithTheme as SiteContainer }
