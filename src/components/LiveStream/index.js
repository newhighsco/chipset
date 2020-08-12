import { withTheme } from '../../providers'
import { LIVE_STREAM } from '../identifiers'
import { LiveStream } from './LiveStream'

import theme from './LiveStream.module.scss'

const WithTheme = withTheme(LIVE_STREAM, theme)(LiveStream)

export default WithTheme
export { WithTheme as LiveStream }
