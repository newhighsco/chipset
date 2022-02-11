import React from 'react'
import { shallow } from 'enzyme'
import PageContainer from './PageContainer'
import ContentContainer from '../ContentContainer'

describe('Components/PageContainer', () => {
  it('should render nothing by default', () => {
    const wrapper = shallow(<PageContainer />)

    expect(wrapper.type()).toEqual(null)
  })

  it("should render a <ContentContainer /> when 'children' is set", () => {
    const wrapper = shallow(<PageContainer>Content</PageContainer>)

    expect(wrapper.children().length).toEqual(1)
    expect(wrapper.find(ContentContainer).length).toEqual(1)
    expect(wrapper.find(ContentContainer).prop('children')).toEqual('Content')
  })

  it("should render correctly when 'header' is set", () => {
    const wrapper = shallow(
      <PageContainer header={<header>Header</header>}>Content</PageContainer>
    )

    expect(wrapper.children().length).toEqual(2)
    expect(wrapper.childAt(0).type()).toEqual('header')
    expect(wrapper.childAt(0).prop('children')).toEqual('Header')
    expect(wrapper.childAt(1).type()).toEqual(ContentContainer)
    expect(wrapper.childAt(1).prop('children')).toEqual('Content')
  })

  it("should render correctly when 'footer' is set", () => {
    const wrapper = shallow(
      <PageContainer footer={<footer>Footer</footer>}>Content</PageContainer>
    )

    expect(wrapper.children().length).toEqual(2)
    expect(wrapper.childAt(0).type()).toEqual(ContentContainer)
    expect(wrapper.childAt(0).prop('children')).toEqual('Content')
    expect(wrapper.childAt(1).type()).toEqual('footer')
    expect(wrapper.childAt(1).prop('children')).toEqual('Footer')
  })
})
