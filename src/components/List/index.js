import { withTheme } from '../../providers'
import { LIST } from '../identifiers'
import { List } from './List'

import theme from './List.module.scss'

const WithTheme = withTheme(LIST, theme)(List)

export default WithTheme
export { WithTheme as List }
