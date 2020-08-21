import React, { useState } from 'react'
import { array, bool, func, shape, string } from 'prop-types'
import classNames from 'classnames'
import Button from '../Button'
import Icon from '../Icon'
import List from '../List'
import SmartLink from '../SmartLink'
import VisuallyHidden from '../VisuallyHidden'

import MenuSvg from './images/menu.svg'
import CloseSvg from './images/close.svg'

const Navigation = ({
  title = 'Navigation',
  links = [],
  inline,
  renderLink,
  toggle,
  onToggle = () => {},
  theme,
  className
}) => {
  if (!links.length) return null

  const [visible, setVisibility] = useState(!toggle)

  const toggleVisibility = () => {
    setVisibility(!visible)
    onToggle({ visible })
  }

  return (
    <nav role="navigation" className={classNames(theme?.wrapper, className)}>
      <VisuallyHidden as="h2">{title}</VisuallyHidden>
      {toggle && (
        <Button
          aria-expanded={visible}
          onClick={toggleVisibility}
          className={theme?.toggle}
        >
          <Icon
            theme={{ wrapper: theme?.toggleIcon }}
            alt={`${!visible ? 'Show' : 'Hide'} ${title}`}
          >
            {!visible ? <MenuSvg /> : <CloseSvg />}
          </Icon>
        </Button>
      )}
      <List
        role="menubar"
        unstyled
        inline={inline}
        hidden={!visible}
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
  toggle: bool,
  onToggle: func,
  theme: shape({ wrapper: string, item: string, link: string }),
  className: string
}

export { Navigation }
