import React from 'react'
import { bool, string } from 'prop-types'
import classNames from 'classnames'
import { Grid, GridItem } from '../Grid'
import { ResponsiveMedia } from '../ResponsiveMedia'
import { getLiveStreamUrls } from './utils'

import styles from './index.module.scss'

const LiveStream = ({
  href,
  allowFullScreen = true,
  autoplay = true,
  muted,
  darkMode,
  showChat = true,
  className
}) => {
  const [videoUrl, chatUrl] = getLiveStreamUrls({
    href,
    autoplay,
    muted,
    darkMode,
    showChat
  })

  if (!videoUrl) return null

  return (
    <Grid gutterless flex className={classNames(styles.wrapper, className)}>
      <GridItem className={styles.video}>
        <ResponsiveMedia ratio="16:9">
          <iframe
            data-test-id="LiveStreamVideo"
            title="Live stream"
            src={videoUrl.toString()}
            allowFullScreen={allowFullScreen}
            loading="lazy"
          />
        </ResponsiveMedia>
      </GridItem>
      {chatUrl && (
        <GridItem className={styles.chat}>
          <iframe
            data-test-id="LiveStreamChat"
            title="Live chat"
            src={chatUrl.toString()}
            loading="lazy"
          />
        </GridItem>
      )}
    </Grid>
  )
}

LiveStream.propTypes = {
  href: string,
  allowFullScreen: bool,
  autoplay: bool,
  muted: bool,
  darkMode: bool,
  showChat: bool,
  className: string
}

export default LiveStream
export { LiveStream }
