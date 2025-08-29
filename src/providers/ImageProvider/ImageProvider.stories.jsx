import React from 'react'

import { imageUrl } from '../../__mocks__/fixtures'
import { ImageProvider, useImage } from '..'

export default { component: ImageProvider }

const Image = props => {
  const renderImage = useImage()

  return renderImage(props)
}

export const Source = {
  args: {
    // eslint-disable-next-line jsx-a11y/alt-text
    renderImage: props => <img {...props} role="presentation" />,
    children: <Image src={imageUrl} />
  },
  parameters: { chromatic: { disable: true } }
}

export const Example = { args: Source.args }
