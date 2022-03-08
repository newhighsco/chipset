import { withTheme } from '../../providers'
import PureContentContainer from './ContentContainer'

import theme from './ContentContainer.module.scss'

const { displayName } = PureContentContainer
const ContentContainer = withTheme(displayName, theme)(PureContentContainer)

ContentContainer.displayName = displayName

export default ContentContainer
export type { ContentContainerProps } from './ContentContainer.types'
