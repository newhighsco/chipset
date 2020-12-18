import { withTheme } from '../../providers'
import PureLiveStream from './LiveStream'

import theme from './LiveStream.module.scss'

const { displayName } = PureLiveStream
const LiveStream = withTheme(displayName, theme)(PureLiveStream)

export default LiveStream
