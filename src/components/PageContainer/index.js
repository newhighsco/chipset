import { withTheme } from '../../providers'
import PurePageContainer from './PageContainer'

import theme from './PageContainer.module.scss'

const { displayName } = PurePageContainer
const PageContainer = withTheme(displayName, theme)(PurePageContainer)

export default PageContainer
