import { withTheme } from '../../providers'
import { PAGE_CONTAINER } from '../identifiers'
import { PageContainer } from './PageContainer'

import theme from './theme.module.scss'

const WithTheme = withTheme(PAGE_CONTAINER, theme)(PageContainer)

export default WithTheme
export { WithTheme as PageContainer }
