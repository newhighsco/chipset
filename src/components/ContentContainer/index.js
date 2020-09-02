import { withTheme } from '../../providers'
import { CONTENT_CONTAINER } from '../identifiers'
import PureContentContainer from './ContentContainer'

import theme from './ContentContainer.module.scss'

const ContentContainer = withTheme(
  CONTENT_CONTAINER,
  theme
)(PureContentContainer)

export default ContentContainer
