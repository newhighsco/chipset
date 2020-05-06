import React, { useEffect, useState } from 'react'
import { bool, func, oneOf, string } from 'prop-types'
import classNames from 'classnames'
import fetch from 'node-fetch'
import urlParse from 'url-parse'
import { Grid, GridItem } from '../Grid'
import { ResponsiveMedia } from '../ResponsiveMedia'

import styles from './index.module.scss'

const TwitchEmbed = ({
  channel,
  alwaysOnline,
  allowFullScreen = true,
  autoplay = true,
  muted,
  theme = 'light',
  onOnline,
  className
}) => {
  if (!channel) return null

  const [online, setOnline] = useState(alwaysOnline)

  useEffect(() => {
    if (online) return

    const isOnline = async () => {
      const apiUrl = urlParse(`https://api.twitch.tv/helix/streams`)
      apiUrl.set('query', { user_login: channel })

      const { data } = await fetch(apiUrl.toString(), {
        headers: { 'Client-ID': process.env.TWITCH_CLIENT_ID }
      }).then(response => response.json())

      setOnline(!!data?.length)
    }

    isOnline()
  }, [online])

  if (!online) return null
  if (onOnline) onOnline()

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
          />
        </ResponsiveMedia>
      </GridItem>
      <GridItem className={styles.chat}>
        <iframe title="Chat" src={chatSrc.toString()} />
      </GridItem>
    </Grid>
  )
}

TwitchEmbed.propTypes = {
  channel: string,
  alwaysOnline: bool,
  allowFullScreen: bool,
  autoplay: bool,
  muted: bool,
  onOnline: func,
  theme: oneOf(['light', 'dark']),
  className: string
}

export default TwitchEmbed
export { TwitchEmbed }
