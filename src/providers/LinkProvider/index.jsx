import { func, node } from 'prop-types'
import React, { createContext, useContext } from 'react'

// eslint-disable-next-line jsx-a11y/anchor-has-content
const LinkContext = createContext(props => <a {...props} />)

export const useLink = () => {
  const renderLink = useContext(LinkContext)

  if (!renderLink) {
    throw new Error("<LinkProvider /> missing 'renderLink'")
  }

  return renderLink
}

const LinkProvider = ({ children, renderLink }) => {
  return (
    <LinkContext.Provider value={renderLink}>{children}</LinkContext.Provider>
  )
}

LinkProvider.propTypes = {
  children: node,
  renderLink: func
}

export default LinkProvider
