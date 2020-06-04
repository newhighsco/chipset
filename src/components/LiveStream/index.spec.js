import React from 'react'
import { shallow } from 'enzyme'
import { LiveStream } from '..'

const props = { href: 'https://twitch.tv/failarmy' }

describe('Components/LiveStream', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<LiveStream />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render correctly when 'href' is set", () => {
    const wrapper = shallow(<LiveStream {...props} />)

    expect(
      wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
    ).toEqual(
      'https://player.twitch.tv?channel=failarmy&autoplay=true&muted=false'
    )
    expect(
      wrapper
        .find('iframe[data-test-id="LiveStreamVideo"]')
        .prop('allowFullScreen')
    ).toEqual(true)
    expect(
      wrapper.find('iframe[data-test-id="LiveStreamChat"]').prop('src')
    ).toEqual('https://www.twitch.tv/embed/failarmy/chat')
    expect(
      wrapper
        .find('iframe[data-test-id="LiveStreamChat"]')
        .prop('allowFullScreen')
    ).toEqual(undefined)
  })

  it("should render correctly when 'autoplay' is set to 'false'", () => {
    const wrapper = shallow(<LiveStream {...props} autoplay={false} />)

    expect(
      wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
    ).toEqual(
      'https://player.twitch.tv?channel=failarmy&autoplay=false&muted=false'
    )
  })

  it("should render correctly when 'muted' is set", () => {
    const wrapper = shallow(<LiveStream {...props} muted />)

    expect(
      wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
    ).toEqual(
      'https://player.twitch.tv?channel=failarmy&autoplay=true&muted=true'
    )
  })

  it("should render correctly when 'darkMode' is set", () => {
    const wrapper = shallow(<LiveStream {...props} darkMode />)

    expect(
      wrapper.find('iframe[data-test-id="LiveStreamChat"]').prop('src')
    ).toEqual('https://www.twitch.tv/embed/failarmy/chat?darkpopout=')
  })

  it('should set correct classNames', () => {
    const wrapper = shallow(<LiveStream {...props} className="foo" />)

    expect(wrapper.prop('className')).toEqual('wrapper foo')
  })
})
