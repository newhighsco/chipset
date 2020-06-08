import fetch from 'node-fetch'
import urlJoin from 'url-join'

const MIXER = 'Mixer'
const TWITCH = 'Twitch'
const YOUTUBE = 'YouTube'
const mixerUrlRegEx = /^(https?:\/\/)?(www\.)?(mixer\.com)\/(.+)$/
const twitchUrlRegEx = /^(https?:\/\/)?(www\.)?(twitch\.tv)\/(.+)$/
const youtubeUrlRegEx = /^(https?:\/\/)?(www\.)?(youtube\.com)(\/c(hannel)?)?\/(.+)$/
const youtubeVideoRegEx = /\\"currentVideoEndpoint\\":{.*?\\"watchEndpoint\\":{\\"videoId\\":\\"(\w+?)\\"/

const mixerUrl = url => mixerUrlRegEx.exec(url)
const twitchUrl = url => twitchUrlRegEx.exec(url)
const youtubeUrl = url => youtubeUrlRegEx.exec(url)
const youtubeVideo = contents => youtubeVideoRegEx.exec(contents)

export const getChannel = async url => {
  var type
  var channel

  if (mixerUrl(url)) {
    type = MIXER
    channel = url.match(mixerUrlRegEx)[4]
  }

  if (twitchUrl(url)) {
    type = TWITCH
    channel = url.match(twitchUrlRegEx)[4]
  }

  if (youtubeUrl(url)) {
    type = YOUTUBE

    const { contents } = await fetch(
      `https://api.allorigins.win/get?url=${urlJoin(url, 'live')}`
    ).then(response => response.json())

    if (youtubeVideo(contents)) {
      channel = contents.match(youtubeVideoRegEx)[1]
    }
  }

  return [type, channel]
}

export const getLiveStreamUrls = async ({
  href,
  autoplay,
  muted,
  darkMode,
  showChat
}) => {
  const [type, channel] = await getChannel(href)
  var videoUrl
  var chatUrl

  if (channel) {
    if (type === MIXER) {
      videoUrl = new URL(`https://mixer.com/embed/player/${channel}`)
      videoUrl.searchParams.set('disableLowLatency', true)
      videoUrl.searchParams.set('muted', !!muted)

      chatUrl = new URL(`https://mixer.com/embed/chat/${channel}`)
    }

    if (type === TWITCH) {
      videoUrl = new URL('https://player.twitch.tv')
      videoUrl.searchParams.set('channel', channel)
      videoUrl.searchParams.set('autoplay', !!autoplay)
      videoUrl.searchParams.set('muted', !!muted)

      chatUrl = new URL(`https://www.twitch.tv/embed/${channel}/chat`)

      if (darkMode) chatUrl.searchParams.set('darkpopout', '')
    }

    if (type === YOUTUBE) {
      videoUrl = new URL(`https://www.youtube.com/embed/${channel}`)
      videoUrl.searchParams.set('autoplay', !!autoplay)

      chatUrl = new URL('https://www.youtube.com/live_chat')
      chatUrl.searchParams.set('v', channel)
      chatUrl.searchParams.set('embed_domain', location.hostname)

      if (darkMode) chatUrl.searchParams.set('dark_theme', 1)
    }
  }

  return { videoUrl, chatUrl: showChat && chatUrl }
}
