import { withTheme } from '../../providers'
import PureGrid from './Grid'
import theme from './Grid.module.scss'
import PureGridItem from './GridItem'

const { displayName } = PureGrid
const Grid = withTheme(displayName, theme)(PureGrid)
const GridItem = withTheme(displayName, theme)(PureGridItem)

Grid.displayName = displayName
GridItem.displayName = `${displayName}.Item`

Grid.Item = GridItem

export default Grid
