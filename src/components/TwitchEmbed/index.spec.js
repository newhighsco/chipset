import React from 'react'
import { shallow } from 'enzyme'
import { TwitchEmbed } from '..'

describe('Components/TwitchEmbed', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<TwitchEmbed />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render correctly when 'channel' is set", () => {
    const wrapper = shallow(<TwitchEmbed channel="failarmy" />)

    expect(wrapper.find('iframe[title="Live"]').prop('src')).toEqual(
      'https://player.twitch.tv?channel=failarmy&autoplay=true&muted=false'
    )
    expect(
      wrapper.find('iframe[title="Live"]').prop('allowFullScreen')
    ).toEqual(true)
    expect(wrapper.find('iframe[title="Chat"]').prop('src')).toEqual(
      'https://www.twitch.tv/embed/failarmy/chat'
    )
    expect(
      wrapper.find('iframe[title="Chat"]').prop('allowFullScreen')
    ).toEqual(undefined)
  })

  it("should render correctly when 'autoplay' is set to 'false'", () => {
    const wrapper = shallow(<TwitchEmbed channel="failarmy" autoplay={false} />)

    expect(wrapper.find('iframe[title="Live"]').prop('src')).toEqual(
      'https://player.twitch.tv?channel=failarmy&autoplay=false&muted=false'
    )
  })

  it("should render correctly when 'mute' is set", () => {
    const wrapper = shallow(<TwitchEmbed channel="failarmy" muted />)

    expect(wrapper.find('iframe[title="Live"]').prop('src')).toEqual(
      'https://player.twitch.tv?channel=failarmy&autoplay=true&muted=true'
    )
  })

  it("should render correctly when 'theme' is set to 'dark'", () => {
    const wrapper = shallow(<TwitchEmbed channel="failarmy" theme="dark" />)

    expect(wrapper.find('iframe[title="Chat"]').prop('src')).toEqual(
      'https://www.twitch.tv/embed/failarmy/chat?darkpopout='
    )
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(<TwitchEmbed channel="failarmy" className="foo" />)

    expect(wrapper.prop('className')).toEqual('wrapper foo')
  })
})
