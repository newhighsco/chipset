import React from 'react'
import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import fetch from 'node-fetch'
import * as deviceDetect from 'react-device-detect'
import LiveStream from './LiveStream'

jest.mock('node-fetch')
jest.mock('react-device-detect')

const { Response } = jest.requireActual('node-fetch')

describe('Components/LiveStream', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-import-assign
    deviceDetect.isMobile = false
  })

  it('should render nothing by default', async () => {
    const { container } = render(<LiveStream />)

    await waitForElementToBeRemoved(() =>
      screen.queryByText('Loading live stream')
    )

    expect(container.firstChild).toBeNull()
  })

  it("should render nothing when 'href' is invalid", async () => {
    const { container } = render(<LiveStream href="https://foo.com/bar" />)

    await waitForElementToBeRemoved(() =>
      screen.queryByText('Loading live stream')
    )

    expect(container.firstChild).toBeNull()
  })

  describe('Facebook', () => {
    const props = { href: 'https://facebook.gg/failarmy' }

    it("should render correctly when 'href' is set", async () => {
      render(<LiveStream {...props} />)

      const stream = await screen.findByTitle('Live stream')

      expect(stream).toHaveAttribute(
        'src',
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffailarmy%2Flive&autoplay=true'
      )
      expect(screen.queryByTitle('Live chat')).not.toBeInTheDocument()
    })

    it("should render correctly when 'autoPlay' is set to 'false'", async () => {
      render(<LiveStream {...props} autoPlay={false} />)

      const stream = await screen.findByTitle('Live stream')

      expect(stream).toHaveAttribute(
        'src',
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffailarmy%2Flive&autoplay=false'
      )
    })
  })

  describe('Twitch', () => {
    const props = { href: 'https://www.twitch.tv/failarmy' }

    it("should render correctly when 'href' is set", async () => {
      render(<LiveStream {...props} />)

      const stream = await screen.findByTitle('Live stream')
      const chat = await screen.findByTitle('Live chat')

      expect(stream).toHaveAttribute(
        'src',
        'https://player.twitch.tv/?channel=failarmy&parent=localhost&autoplay=true&muted=false'
      )
      expect(chat).toHaveAttribute(
        'src',
        'https://www.twitch.tv/embed/failarmy/chat?parent=localhost'
      )
    })

    it("should render correctly when 'autoPlay' is set to 'false'", async () => {
      render(<LiveStream {...props} autoPlay={false} />)

      const stream = await screen.findByTitle('Live stream')

      expect(stream).toHaveAttribute(
        'src',
        'https://player.twitch.tv/?channel=failarmy&parent=localhost&autoplay=false&muted=false'
      )
    })

    it("should render correctly when 'muted' is set", async () => {
      render(<LiveStream {...props} muted />)

      const stream = await screen.findByTitle('Live stream')

      expect(stream).toHaveAttribute(
        'src',
        'https://player.twitch.tv/?channel=failarmy&parent=localhost&autoplay=true&muted=true'
      )
    })

    it("should render correctly when 'darkMode' is set", async () => {
      render(<LiveStream {...props} darkMode />)

      const chat = await screen.findByTitle('Live chat')

      expect(chat).toHaveAttribute(
        'src',
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
      render(<LiveStream {...props} />)

      const stream = await screen.findByTitle('Live stream')
      const chat = await screen.findByTitle('Live chat')

      expect(stream).toHaveAttribute(
        'src',
        'https://www.youtube-nocookie.com/embed/FooBar123?autoplay=true&mute=false'
      )
      expect(chat).toHaveAttribute(
        'src',
        'https://www.youtube.com/live_chat?v=FooBar123&embed_domain=localhost'
      )
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

      const { container } = render(
        <LiveStream href="https://youtube.com/_____^^***" />
      )

      await waitForElementToBeRemoved(() =>
        screen.queryByText('Loading live stream')
      )

      expect(container.firstChild).toBeNull()
    })

    it("should render correctly when 'autoPlay' is set to 'false'", async () => {
      render(<LiveStream {...props} autoPlay={false} />)

      const stream = await screen.findByTitle('Live stream')

      expect(stream).toHaveAttribute(
        'src',
        'https://www.youtube-nocookie.com/embed/FooBar123?autoplay=false&mute=false'
      )
    })

    it("should render correctly when 'muted' is set", async () => {
      render(<LiveStream {...props} muted />)

      const stream = await screen.findByTitle('Live stream')

      expect(stream).toHaveAttribute(
        'src',
        'https://www.youtube-nocookie.com/embed/FooBar123?autoplay=true&mute=true'
      )
    })

    it("should render correctly when 'darkMode' is set", async () => {
      render(<LiveStream {...props} darkMode />)

      const chat = await screen.findByTitle('Live chat')

      expect(chat).toHaveAttribute(
        'src',
        'https://www.youtube.com/live_chat?v=FooBar123&embed_domain=localhost&dark_theme=1'
      )
    })

    describe('Mobile device', () => {
      beforeAll(() => {
        // eslint-disable-next-line no-import-assign
        deviceDetect.isMobile = true
      })

      it('should render correctly on mobile devices', async () => {
        render(<LiveStream {...props} />)

        await screen.findByTitle('Live stream')

        expect(screen.queryByTitle('Live chat')).not.toBeInTheDocument()
      })
    })
  })
})
