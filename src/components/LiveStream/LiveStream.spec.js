import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount, shallow } from 'enzyme'
import fetch from 'node-fetch'
import * as deviceDetect from 'react-device-detect'
import LiveStream from './LiveStream'

jest.mock('node-fetch')
jest.mock('react-device-detect')

const { Response } = jest.requireActual('node-fetch')

const waitForMount = async wrapper => {
  await act(async () => {
    await Promise.resolve(wrapper)
    await new Promise(resolve => setImmediate(resolve))
    wrapper.update()
  })
}

describe('Components/LiveStream', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-import-assign
    deviceDetect.isMobile = false
  })

  it('should render nothing by default', () => {
    const wrapper = shallow(<LiveStream />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render nothing when 'href' is invalid", async () => {
    const wrapper = mount(<LiveStream href="https://foo.com/bar" />)

    await waitForMount(wrapper)

    expect(wrapper.children().length).toEqual(0)
  })

  describe('Facebook', () => {
    const props = { href: 'https://facebook.gg/failarmy' }

    it("should render correctly when 'href' is set", async () => {
      const wrapper = mount(<LiveStream {...props} />)

      await waitForMount(wrapper)

      expect(
        wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
      ).toEqual(
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffailarmy%2Flive&autoplay=true'
      )
      expect(
        wrapper
          .find('iframe[data-test-id="LiveStreamVideo"]')
          .prop('allowFullScreen')
      ).toEqual(true)
      expect(
        wrapper.find('iframe[data-test-id="LiveStreamChat"]').length
      ).toEqual(0)
    })

    it("should render correctly when 'autoPlay' is set to 'false'", async () => {
      const wrapper = mount(<LiveStream {...props} autoPlay={false} />)

      await waitForMount(wrapper)

      expect(
        wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
      ).toEqual(
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffailarmy%2Flive&autoplay=false'
      )
    })
  })

  describe('Twitch', () => {
    const props = { href: 'https://www.twitch.tv/failarmy' }

    it("should render correctly when 'href' is set", async () => {
      const wrapper = mount(<LiveStream {...props} />)

      await waitForMount(wrapper)

      expect(
        wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
      ).toEqual(
        'https://player.twitch.tv/?channel=failarmy&parent=localhost&autoplay=true&muted=false'
      )
      expect(
        wrapper
          .find('iframe[data-test-id="LiveStreamVideo"]')
          .prop('allowFullScreen')
      ).toEqual(true)
      expect(
        wrapper.find('iframe[data-test-id="LiveStreamChat"]').prop('src')
      ).toEqual('https://www.twitch.tv/embed/failarmy/chat?parent=localhost')
      expect(
        wrapper
          .find('iframe[data-test-id="LiveStreamChat"]')
          .prop('allowFullScreen')
      ).toEqual(undefined)
    })

    it("should render correctly when 'autoPlay' is set to 'false'", async () => {
      const wrapper = mount(<LiveStream {...props} autoPlay={false} />)

      await waitForMount(wrapper)

      expect(
        wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
      ).toEqual(
        'https://player.twitch.tv/?channel=failarmy&parent=localhost&autoplay=false&muted=false'
      )
    })

    it("should render correctly when 'muted' is set", async () => {
      const wrapper = mount(<LiveStream {...props} muted />)

      await waitForMount(wrapper)

      expect(
        wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
      ).toEqual(
        'https://player.twitch.tv/?channel=failarmy&parent=localhost&autoplay=true&muted=true'
      )
    })

    it("should render correctly when 'darkMode' is set", async () => {
      const wrapper = mount(<LiveStream {...props} darkMode />)

      await waitForMount(wrapper)

      expect(
        wrapper.find('iframe[data-test-id="LiveStreamChat"]').prop('src')
      ).toEqual(
        'https://www.twitch.tv/embed/failarmy/chat?parent=localhost&darkpopout='
      )
    })
  })

  describe('YouTube', () => {
    const props = { href: 'https://www.youtube.com/failarmy' }

    beforeEach(() => {
      fetch.mockReturnValue(
        Promise.resolve(
          new Response(
            JSON.stringify({
              contents: `"liveStreamabilityRenderer":{"videoId":"FooBar123"`
            })
          )
        )
      )
    })

    it("should render correctly when 'href' is set", async () => {
      const wrapper = mount(<LiveStream {...props} />)

      await waitForMount(wrapper)

      expect(
        wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
      ).toEqual(
        'https://www.youtube-nocookie.com/embed/FooBar123?autoplay=true&mute=false'
      )
      expect(
        wrapper
          .find('iframe[data-test-id="LiveStreamVideo"]')
          .prop('allowFullScreen')
      ).toEqual(true)
      expect(
        wrapper.find('iframe[data-test-id="LiveStreamChat"]').prop('src')
      ).toEqual(
        'https://www.youtube.com/live_chat?v=FooBar123&embed_domain=localhost'
      )
      expect(
        wrapper
          .find('iframe[data-test-id="LiveStreamChat"]')
          .prop('allowFullScreen')
      ).toEqual(undefined)
    })

    it("should render nothing when 'href' is invalid", async () => {
      fetch.mockReturnValue(
        Promise.resolve(
          new Response(
            JSON.stringify({
              contents: '404'
            })
          )
        )
      )

      const wrapper = mount(
        <LiveStream href="https://youtube.com/_____^^***" />
      )

      await waitForMount(wrapper)

      expect(wrapper.children().length).toEqual(0)
    })

    it("should render correctly when 'autoPlay' is set to 'false'", async () => {
      const wrapper = mount(<LiveStream {...props} autoPlay={false} />)

      await waitForMount(wrapper)

      expect(
        wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
      ).toEqual(
        'https://www.youtube-nocookie.com/embed/FooBar123?autoplay=false&mute=false'
      )
    })

    it("should render correctly when 'muted' is set", async () => {
      const wrapper = mount(<LiveStream {...props} muted />)

      await waitForMount(wrapper)

      expect(
        wrapper.find('iframe[data-test-id="LiveStreamVideo"]').prop('src')
      ).toEqual(
        'https://www.youtube-nocookie.com/embed/FooBar123?autoplay=true&mute=true'
      )
    })

    it("should render correctly when 'darkMode' is set", async () => {
      const wrapper = mount(<LiveStream {...props} darkMode />)

      await waitForMount(wrapper)

      expect(
        wrapper.find('iframe[data-test-id="LiveStreamChat"]').prop('src')
      ).toEqual(
        'https://www.youtube.com/live_chat?v=FooBar123&embed_domain=localhost&dark_theme=1'
      )
    })

    describe('Mobile device', () => {
      beforeAll(() => {
        // eslint-disable-next-line no-import-assign
        deviceDetect.isMobile = true
      })

      it('should render correctly on mobile devices', async () => {
        const wrapper = mount(<LiveStream {...props} />)

        await waitForMount(wrapper)

        expect(
          wrapper.find('iframe[data-test-id="LiveStreamChat"]').length
        ).toEqual(0)
      })
    })
  })
})
