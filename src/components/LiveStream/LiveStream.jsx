import { bool, shape, string } from 'prop-types'
import React, { useEffect, useState } from 'react'

import { classNames } from '../../utils'
import Grid from '../Grid'
import ResponsiveMedia from '../ResponsiveMedia'
import VisuallyHidden from '../VisuallyHidden'
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
  const [loading, setLoading] = useState(true)
  const [liveStreamUrls, setLiveSteamUrls] = useState({
    videoUrl: null,
    chatUrl: null
  })

  useEffect(() => {
    const loadUrls = async () => {
      const urls = await getLiveStreamUrls({
        href,
        autoPlay,
        muted,
        darkMode,
        showChat
      })

      setLiveSteamUrls(urls)
      setLoading(false)
    }

    loadUrls()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <VisuallyHidden>Loading live stream</VisuallyHidden>

  const { videoUrl, chatUrl } = liveStreamUrls

  if (!videoUrl) return null

  return (
    <Grid gutterless flex className={classNames(theme?.root, className)}>
      <Grid.Item className={theme?.video}>
        <ResponsiveMedia ratio="16:9">
          <iframe
            title="Live stream"
            src={videoUrl.href}
            allowFullScreen={allowFullScreen}
            loading="lazy"
          />
        </ResponsiveMedia>
      </Grid.Item>
      {chatUrl && (
        <Grid.Item className={theme?.chat}>
          <iframe title="Live chat" src={chatUrl.href} loading="lazy" />
        </Grid.Item>
      )}
    </Grid>
  )
}

LiveStream.displayName = 'LiveStream'
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
