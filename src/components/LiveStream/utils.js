import { isMobile } from 'react-device-detect'
import urlJoin from 'url-join'

const getExternalUrl = url =>
  `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`

const location = typeof window !== 'undefined' ? window.location : null

const PROVIDERS = {
  facebook: {
    urlRegEx: /^(https?:\/\/)?(www\.)?(facebook\.(com|gg))(\/gaming)?\/(.+)$/,
    getChannelParam: async url => url.match(PROVIDERS.facebook.urlRegEx)[6],
    getVideoUrl: ({ channel, autoPlay }) => {
      const url = new URL('https://www.facebook.com/plugins/video.php')
      url.search = new URLSearchParams({
        href: `https://www.facebook.com/${channel}/live`,
        autoplay: !!autoPlay
      })

      return url
    }
  },
  twitch: {
    urlRegEx: /^(https?:\/\/)?(www\.)?(twitch\.tv)\/(.+)$/,
    getChannelParam: url => url.match(PROVIDERS.twitch.urlRegEx)[4],
    getVideoUrl: ({ channel, autoPlay, muted }) => {
      const url = new URL('https://player.twitch.tv')
      url.search = new URLSearchParams({
        channel,
        parent: location?.hostname,
        autoplay: !!autoPlay,
        muted: !!muted
      })

      return url
    },
    getChatUrl: ({ channel, darkMode }) => {
      const url = new URL(`https://www.twitch.tv/embed/${channel}/chat`)
      url.search = new URLSearchParams({
        parent: location?.hostname,
        ...(darkMode && { darkpopout: '' })
      })

      return url
    }
  },
  youtube: {
    urlRegEx: /^(https?:\/\/)?(www\.)?(youtube\.com)(\/c(hannel)?)?\/(.+)$/,
    getChannelParam: async url => {
      try {
        const { contents } = await fetch(
          getExternalUrl(urlJoin(url, 'live'))
        ).then(response => response.json())

        return contents?.match(
          /"liveStreamabilityRenderer":{"videoId":"([\w|-]+?)"/
        )?.[1]
      } catch {
        return null
      }
    },
    getVideoUrl: ({ channel, autoPlay, muted }) => {
      const url = new URL(`https://www.youtube-nocookie.com/embed/${channel}`)
      url.search = new URLSearchParams({ autoplay: !!autoPlay, mute: !!muted })

      return url
    },
    getChatUrl: ({ channel, darkMode }) => {
      if (isMobile) return null

      const url = new URL('https://www.youtube.com/live_chat')
      url.search = new URLSearchParams({
        v: channel,
        embed_domain: location?.hostname,
        ...(darkMode && { dark_theme: 1 })
      })

      return url
    }
  }
}

const getProvider = url => {
  if (!url) return null

  const keys = Object.keys(PROVIDERS)
  let i = keys.length

  while (i--) {
    const provider = PROVIDERS[keys[i]]

    if (provider.urlRegEx.exec(url)) return provider
  }
}

export const getLiveStreamUrls = async ({
  href,
  autoPlay,
  muted,
  darkMode,
  showChat
}) => {
  const provider = getProvider(href)
  const channel = await provider?.getChannelParam(href)
  const videoUrl =
    channel && provider?.getVideoUrl?.({ channel, autoPlay, muted })
  const chatUrl = channel && provider?.getChatUrl?.({ channel, darkMode })

  return { videoUrl, chatUrl: showChat && chatUrl }
}
