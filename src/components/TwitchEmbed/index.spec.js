import React from 'react'
import { mount, shallow } from 'enzyme'
import fetch from 'node-fetch'
import { TwitchEmbed } from '..'

jest.mock('node-fetch')

const { Response } = jest.requireActual('node-fetch')

describe('Components/TwitchEmbed', () => {
  beforeEach(() => {
    fetch.mockRestore()
  })

  it('should render nothing by default', () => {
    const wrapper = shallow(<TwitchEmbed />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render correctly when 'channel' is offline", () => {
    fetch.mockReturnValue(
      Promise.resolve(new Response(JSON.stringify({ data: null })))
    )

    const wrapper = mount(<TwitchEmbed channel="failarmy" />)

    expect(fetch).toBeCalledWith(
      'https://api.twitch.tv/helix/streams?user_login=failarmy',
      {
        headers: { 'Client-ID': undefined }
      }
    )
    expect(wrapper.find('iframe').length).toEqual(0)
  })

  it("should render correctly when 'channel' is online", () => {
    fetch.mockReturnValue(
      Promise.resolve(new Response(JSON.stringify({ data: [{ id: 'foo' }] })))
    )

    mount(<TwitchEmbed channel="failarmy" />)

    expect(fetch).toBeCalledWith(
      'https://api.twitch.tv/helix/streams?user_login=failarmy',
      {
        headers: { 'Client-ID': undefined }
      }
    )
  })

  it("should render correctly when 'alwaysOnline' is set", () => {
    const handleOnline = jest.fn(() => ({}))
    const wrapper = mount(
      <TwitchEmbed channel="failarmy" alwaysOnline onOnline={handleOnline} />
    )

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
    expect(handleOnline).toBeCalled()
  })

  it("should render correctly when 'autoplay' is set to 'false'", () => {
    const wrapper = shallow(
      <TwitchEmbed channel="failarmy" alwaysOnline autoplay={false} />
    )

    expect(wrapper.find('iframe[title="Live"]').prop('src')).toEqual(
      'https://player.twitch.tv?channel=failarmy&autoplay=false&muted=false'
    )
  })

  it("should render correctly when 'mute' is set", () => {
    const wrapper = shallow(
      <TwitchEmbed channel="failarmy" alwaysOnline muted />
    )

    expect(wrapper.find('iframe[title="Live"]').prop('src')).toEqual(
      'https://player.twitch.tv?channel=failarmy&autoplay=true&muted=true'
    )
  })

  it("should render correctly when 'theme' is set to 'dark'", () => {
    const wrapper = shallow(
      <TwitchEmbed channel="failarmy" alwaysOnline theme="dark" />
    )

    expect(wrapper.find('iframe[title="Chat"]').prop('src')).toEqual(
      'https://www.twitch.tv/embed/failarmy/chat?darkpopout='
    )
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(
      <TwitchEmbed channel="failarmy" alwaysOnline className="foo" />
    )

    expect(wrapper.prop('className')).toEqual('wrapper foo')
  })
})
