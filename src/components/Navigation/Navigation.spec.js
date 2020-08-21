import React from 'react'
import { shallow } from 'enzyme'
import { Navigation } from './Navigation'
import { Button } from '../Button'
import { List } from '../List'

const links = [
  { href: '/foo', children: 'Foo' },
  { href: '/bar', children: 'Bar' },
  { href: '/fizz', children: 'Fizz' },
  { href: 'https://buzz.com', target: '_blank', children: 'Buzz' }
]

describe('Components/Navigation', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<Navigation />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render <nav /> when 'links' are passed", () => {
    const wrapper = shallow(<Navigation links={links} />)

    expect(wrapper.type()).toEqual('nav')
    expect(wrapper.find(Button).length).toEqual(0)
    expect(wrapper.find(List).prop('hidden')).toEqual(false)
    expect(wrapper.find('li > [href]').length).toEqual(4)
    expect(wrapper.find('li > [href]').first().props()).toEqual({
      href: '/foo',
      children: 'Foo'
    })
  })

  it("should render the correct component when 'renderLink' is set", () => {
    const wrapper = shallow(
      <Navigation
        links={links}
        renderLink={({ href, children }, index) => (
          <span id={index} data-href={href}>
            {children}
          </span>
        )}
      />
    )

    expect(wrapper.find('li > span').length).toEqual(4)
    expect(wrapper.find('li > span').first().props()).toEqual({
      id: 0,
      'data-href': '/foo',
      children: 'Foo'
    })
  })

  it("should render a <Button /> with 'toggle' is set", () => {
    const wrapper = shallow(<Navigation links={links} toggle />)

    expect(wrapper.find(Button).length).toEqual(1)
    expect(wrapper.find(Button).prop('aria-expanded')).toEqual(false)
    expect(wrapper.find(Button).childAt(0).prop('alt')).toEqual(
      'Show Navigation'
    )
    expect(wrapper.find(List).prop('hidden')).toEqual(true)

    wrapper.find(Button).simulate('click')

    expect(wrapper.find(Button).prop('aria-expanded')).toEqual(true)
    expect(wrapper.find(Button).childAt(0).prop('alt')).toEqual(
      'Hide Navigation'
    )
    expect(wrapper.find(List).prop('hidden')).toEqual(false)
  })
})
