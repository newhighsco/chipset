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
    renderImage: props => <img {...props} role="presentation" />,
    children: <Image src={imageUrl} />
  }
}

export const Example = { args: Source.args }
