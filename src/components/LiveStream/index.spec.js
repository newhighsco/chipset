import React from 'react'
import { shallow } from 'enzyme'
import { LiveStream } from '..'

describe('Components/LiveStream', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<LiveStream />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render nothing when 'href' is invalid", () => {
    const wrapper = shallow(<LiveStream href="https://foo.com/bar" />)

    expect(wrapper.type()).toEqual(null)
  })

  describe('Mixer', () => {
    const props = { href: 'https://mixer.com/NatureTec' }

    it("should render correctly when 'href' is set", () => {
      const wrapper = shallow(<LiveStream {...props} />)

      expect(
        wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
      ).toEqual(
        'https://mixer.com/embed/player/NatureTec?disableLowLatency=true&muted=false'
      )
      expect(
        wrapper
          .find('iframe[data-test-id="LiveStreamVideo"]')
          .prop('allowFullScreen')
      ).toEqual(true)
      expect(
        wrapper.find('iframe[data-test-id="LiveStreamChat"]').prop('src')
      ).toEqual('https://mixer.com/embed/chat/NatureTec')
      expect(
        wrapper
          .find('iframe[data-test-id="LiveStreamChat"]')
          .prop('allowFullScreen')
      ).toEqual(undefined)
    })

    it("should render correctly when 'muted' is set", () => {
      const wrapper = shallow(<LiveStream {...props} muted />)

      expect(
        wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
      ).toEqual(
        'https://mixer.com/embed/player/NatureTec?disableLowLatency=true&muted=true'
      )
    })
  })

  describe('Twitch', () => {
    const props = { href: 'https://www.twitch.tv/failarmy' }

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
  })
})
