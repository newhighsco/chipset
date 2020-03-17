import React from 'react'
import { SiteContainer } from '.'

import theme from './__tests__/theme.module.scss'

export default {
  title: 'Site container',
  component: SiteContainer
}

export const base = () => <SiteContainer>children</SiteContainer>
export const themed = () => (
  <SiteContainer theme={theme}>children</SiteContainer>
)

// export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

// ToStorybook.story = {
//   name: 'to Storybook',
// };
