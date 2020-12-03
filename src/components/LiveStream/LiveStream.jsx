import React, { useEffect, useState } from 'react'
import { bool, shape, string } from 'prop-types'
import classNames from 'classnames'
import Grid from '../Grid'
import ResponsiveMedia from '../ResponsiveMedia'
import { getLiveStreamUrls } from './utils'

const LiveStream = ({
  href,
  allowFullScreen = true,
  autoPlay = true,
  muted,
  darkMode,
  showChat = true,
  theme,
  className
}) => {
  if (!href) return null

  const [liveStreamUrls, setLiveSteamUrls] = useState({
    videoUrl: null,
    chatUrl: null
  })

  useEffect(() => {
    const loadUrls = async () => {
      setLiveSteamUrls(
        await getLiveStreamUrls({
          href,
          autoPlay,
          muted,
          darkMode,
          showChat
        })
      )
    }

    loadUrls()
  }, [href])

  const { videoUrl, chatUrl } = liveStreamUrls

  if (!videoUrl) return null

  return (
    <Grid gutterless flex className={classNames(theme?.root, className)}>
      <Grid.Item className={theme?.video}>
        <ResponsiveMedia ratio="16:9">
          <iframe
            data-test-id="LiveStreamVideo"
            title="Live stream"
            src={videoUrl.toString()}
            allowFullScreen={allowFullScreen}
            loading="lazy"
          />
        </ResponsiveMedia>
      </Grid.Item>
      {chatUrl && (
        <Grid.Item className={theme?.chat}>
          <iframe
            data-test-id="LiveStreamChat"
            title="Live chat"
            src={chatUrl.toString()}
            loading="lazy"
          />
        </Grid.Item>
      )}
    </Grid>
  )
}

LiveStream.propTypes = {
  href: string,
  allowFullScreen: bool,
  autoPlay: bool,
  muted: bool,
  darkMode: bool,
  showChat: bool,
  theme: shape({ root: string, video: string, chat: string }),
  className: string
}

export default LiveStream
