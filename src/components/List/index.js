import { withTheme } from '../../providers'
import PureList from './List'

import theme from './List.module.scss'

const { displayName } = PureList
const List = withTheme(displayName, theme)(PureList)

export default List
