import React from 'react'
import { array, bool, func, shape, string } from 'prop-types'
import classNames from 'classnames'
import List from '../List'
import SmartLink from '../SmartLink'
import VisuallyHidden from '../VisuallyHidden'

const Navigation = ({
  title = 'Navigation',
  links = [],
  inline,
  renderLink,
  theme,
  className
}) => {
  if (!links.length) return null

  return (
    <nav role="navigation" className={classNames(theme?.wrapper, className)}>
      <VisuallyHidden as="h2">{title}</VisuallyHidden>
      <List
        role="menubar"
        unstyled
        inline={inline}
        theme={{ wrapper: theme?.list, inline: theme?.inline }}
      >
        {links.map((link, index) => {
          const props = { ...link, className: theme?.link }

          return (
            <li key={index} role="menuitem" className={theme?.item}>
              {renderLink ? renderLink(props, index) : <SmartLink {...props} />}
            </li>
          )
        })}
      </List>
    </nav>
  )
}

Navigation.propTypes = {
  title: string,
  links: array,
  inline: bool,
  renderLink: func,
  theme: shape({ wrapper: string, item: string, link: string }),
  className: string
}

export { Navigation }
