import { withTheme } from '../../providers'
import PureList from './List'

import theme from './List.module.scss'

const { displayName } = PureList
const List = withTheme(displayName, theme)(PureList)

List.displayName = displayName

export default List
export type { ListProps } from './List.types'
