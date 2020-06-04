import urlParse from 'url-parse'

/* <iframe title="ObiBertKenobi's player frame" i18n-title="channel#ShareDialog:playerEmbedFrame|Embed player Frame copied from share dialog" allowfullscreen="true" src="https://mixer.com/embed/player/ObiBertKenobi?disableLowLatency=1" width="620" height="349"> </iframe> */
/* <iframe title="ObiBertKenobi's chat frame" i18n-title="channel#ShareDialog:chatEmbedFrame|eEmbedmbed chat frame copied from share dialog" allowfullscreen="true" src="https://mixer.com/embed/chat/ObiBertKenobi" width="378" height="620"> </iframe> */
// const videoSrc = `https://www.youtube.com/embed/live_stream?channel=${channel}&autoplay=1`
// const chatSrc = `https://www.youtube.com/live_chat?v=DjjZOsy4GPM&embed_domain=localhost&dark_theme=1`

const twitchUrlRegEx = /^(https?:\/\/)?(www\.)?(twitch\.tv)\/(.+)$/
const twitchUrl = url => twitchUrlRegEx.exec(url)

export const getChannel = url => {
  if (twitchUrl(url)) return url.replace(twitchUrlRegEx, '$4')
}

export const getLiveStreamUrls = ({
  href,
  autoplay,
  muted,
  darkMode,
  showChat
}) => {
  const channel = getChannel(href)
  var videoUrl
  var chatUrl

  if (channel) {
    videoUrl = urlParse('https://player.twitch.tv')
    videoUrl.set('query', {
      channel,
      autoplay: !!autoplay,
      muted: !!muted
    })

    chatUrl = urlParse(`https://www.twitch.tv/embed/${channel}/chat`)
    chatUrl.set('query', { ...(darkMode && { darkpopout: null }) })
  }

  return [videoUrl, showChat && chatUrl]
}
