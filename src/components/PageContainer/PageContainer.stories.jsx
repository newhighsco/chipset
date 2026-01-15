import React from 'react'

import { FooterContainer, HeaderContainer, PageContainer } from '..'

export default { component: PageContainer }

export const Source = {
  args: { header: <header />, footer: <footer />, children: 'Content' },
  parameters: { chromatic: { disable: true } }
}

export const Example = {
  args: {
    header: <HeaderContainer>Header</HeaderContainer>,
    footer: <FooterContainer>Footer</FooterContainer>,
    children: 'Content'
  },
  decorators: [
    Story => (
      <div style={{ display: 'flex', flexDirection: 'column', height: 300 }}>
        {Story()}
      </div>
    )
  ]
}
