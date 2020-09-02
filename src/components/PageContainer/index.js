import { withTheme } from '../../providers'
import { PAGE_CONTAINER } from '../identifiers'
import PurePageContainer from './PageContainer'

import theme from './PageContainer.module.scss'

const PageContainer = withTheme(PAGE_CONTAINER, theme)(PurePageContainer)

export default PageContainer
