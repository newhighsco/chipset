import { withTheme } from '../../providers'
import { LIST } from '../identifiers'
import PureList from './List'

import theme from './List.module.scss'

const List = withTheme(LIST, theme)(PureList)

export default List
