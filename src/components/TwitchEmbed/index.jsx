import React from 'react'
import { bool, oneOf, string } from 'prop-types'
import classNames from 'classnames'
import urlParse from 'url-parse'
import { Grid, GridItem } from '../Grid'
import { ResponsiveMedia } from '../ResponsiveMedia'

import styles from './index.module.scss'

const TwitchEmbed = ({
  channel,
  allowFullScreen = true,
  autoplay = true,
  muted,
  theme = 'light',
  className
}) => {
  if (!channel) return null

  const videoSrc = urlParse('https://player.twitch.tv')
  videoSrc.set('query', {
    channel,
    autoplay: !!autoplay,
    muted: !!muted
  })

  const chatSrc = urlParse(`https://www.twitch.tv/embed/${channel}/chat`)
  chatSrc.set('query', { ...(theme === 'dark' && { darkpopout: null }) })

  return (
    <Grid gutterless flex className={classNames(styles.wrapper, className)}>
      <GridItem className={styles.video}>
        <ResponsiveMedia ratio="16:9">
          <iframe
            title="Live"
            src={videoSrc.toString()}
            allowFullScreen={allowFullScreen}
            loading="lazy"
          />
        </ResponsiveMedia>
      </GridItem>
      <GridItem className={styles.chat}>
        <iframe title="Chat" src={chatSrc.toString()} loading="lazy" />
      </GridItem>
    </Grid>
  )
}

TwitchEmbed.propTypes = {
  channel: string,
  allowFullScreen: bool,
  autoplay: bool,
  muted: bool,
  theme: oneOf(['light', 'dark']),
  className: string
}

export default TwitchEmbed
export { TwitchEmbed }
