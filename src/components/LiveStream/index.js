import { withTheme } from '../../providers'
import { LIVE_STREAM } from '../identifiers'
import PureLiveStream from './LiveStream'

import theme from './LiveStream.module.scss'

const LiveStream = withTheme(LIVE_STREAM, theme)(PureLiveStream)

export default LiveStream
