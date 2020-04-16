import { withTheme } from '../../providers'
import { CONTENT_CONTAINER } from '../identifiers'
import { ContentContainer } from './ContentContainer'

import theme from './ContentContainer.module.scss'

const WithTheme = withTheme(CONTENT_CONTAINER, theme)(ContentContainer)

export default WithTheme
export { WithTheme as ContentContainer }
