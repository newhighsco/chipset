import { withTheme } from '../../providers'
import { GRID } from '../identifiers'
import { Grid, GridItem } from './Grid'

import theme from './Grid.module.scss'

const WithThemeWrapper = withTheme(GRID, theme)(Grid)
const WithThemeItem = withTheme(GRID, theme)(GridItem)

export default WithThemeWrapper
export { WithThemeWrapper as Grid, WithThemeItem as GridItem }
