import { withTheme } from '../../providers'
import { GRID } from '../identifiers'
import PureGrid from './Grid'
import PureGridItem from './GridItem'

import theme from './Grid.module.scss'

const Grid = withTheme(GRID, theme)(PureGrid)
const GridItem = withTheme(GRID, theme)(PureGridItem)

Grid.Item = GridItem

export default Grid
