import { func, node } from 'prop-types'
import React, { createContext, useContext } from 'react'

const LinkContext = createContext(props => <a {...props} />)

export const useLink = () => {
  const renderLink = useContext(LinkContext)

  if (!renderLink) {
    throw new Error("<LinkProvider /> missing 'renderLink'")
  }

  return renderLink
}

export const LinkProvider = ({ children, renderLink }) => {
  return (
    <LinkContext.Provider value={renderLink}>{children}</LinkContext.Provider>
  )
}

LinkProvider.propTypes = { children: node, renderLink: func }
