import urlParse from 'url-parse'

// const videoSrc = `https://www.youtube.com/embed/live_stream?channel=${channel}&autoplay=1`
// const chatSrc = `https://www.youtube.com/live_chat?v=DjjZOsy4GPM&embed_domain=localhost&dark_theme=1`
const MIXER = 'Mixer'
const TWITCH = 'Twitch'
const mixerUrlRegeEx = /^(https?:\/\/)?(www\.)?(mixer\.com)\/(.+)$/
const twitchUrlRegEx = /^(https?:\/\/)?(www\.)?(twitch\.tv)\/(.+)$/

const mixerUrl = url => mixerUrlRegeEx.exec(url)
const twitchUrl = url => twitchUrlRegEx.exec(url)

export const getChannel = url => {
  var type
  var channel

  if (mixerUrl(url)) {
    type = MIXER
    channel = url.replace(mixerUrlRegeEx, '$4')
  }

  if (twitchUrl(url)) {
    type = TWITCH
    channel = url.replace(twitchUrlRegEx, '$4')
  }

  return [type, channel]
}

export const getLiveStreamUrls = ({
  href,
  autoplay,
  muted,
  darkMode,
  showChat
}) => {
  const [type, channel] = getChannel(href)
  var videoUrl
  var chatUrl

  if (channel) {
    if (type === MIXER) {
      videoUrl = urlParse(`https://mixer.com/embed/player/${channel}`)
      videoUrl.set('query', { disableLowLatency: true, muted: !!muted })

      chatUrl = urlParse(`https://mixer.com/embed/chat/${channel}`)
    }

    if (type === TWITCH) {
      videoUrl = urlParse('https://player.twitch.tv')
      videoUrl.set('query', {
        channel,
        autoplay: !!autoplay,
        muted: !!muted
      })

      chatUrl = urlParse(`https://www.twitch.tv/embed/${channel}/chat`)
      chatUrl.set('query', { ...(darkMode && { darkpopout: null }) })
    }
  }

  return [videoUrl, showChat && chatUrl]
}
