import { func, node } from 'prop-types'
import React, { createContext, useContext } from 'react'

const ImageContext = createContext(props => <img {...props} />)

export const useImage = () => {
  const renderImage = useContext(ImageContext)

  if (!renderImage) {
    throw new Error("<ImageProvider /> missing 'renderImage'")
  }

  return renderImage
}

export const ImageProvider = ({ children, renderImage }) => {
  return (
    <ImageContext.Provider value={renderImage}>
      {children}
    </ImageContext.Provider>
  )
}

ImageProvider.propTypes = { children: node, renderImage: func }
