import { array, bool, func, shape, string } from 'prop-types'
import React from 'react'

import { useIds, useToggle } from '../../hooks'
import { classNames } from '../../utils'
import Button from '../Button'
import Icon from '../Icon'
import List from '../List'
import SmartLink from '../SmartLink'
import VisuallyHidden from '../VisuallyHidden'
import { ReactComponent as CloseSvg } from './images/close.svg'
import { ReactComponent as MenuSvg } from './images/menu.svg'

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
  const [visible, setVisibility] = useToggle(!toggle)
  const [titleId, menuId] = useIds(['title', 'menu'])

  if (!links.length) return null

  const toggleVisibility = () => {
    setVisibility()
    onToggle({ visible })
  }

  return (
    <nav
      aria-labelledby={titleId}
      role="navigation"
      className={classNames(theme?.root, className)}
    >
      <VisuallyHidden as="h2" id={titleId}>
        {title}
      </VisuallyHidden>
      {toggle && (
        <Button
          active={visible}
          aria-controls={menuId}
          aria-expanded={visible}
          onClick={toggleVisibility}
          theme={{ root: theme?.toggle, active: theme?.toggleActive }}
        >
          <Icon
            theme={{ root: theme?.toggleIcon }}
            alt={`${!visible ? 'Show' : 'Hide'} ${title}`}
          >
            {!visible ? <MenuSvg /> : <CloseSvg />}
          </Icon>
        </Button>
      )}
      <List
        id={menuId}
        role="menubar"
        unstyled
        inline={inline}
        hidden={!visible}
        theme={{ root: theme?.list, inline: theme?.inline }}
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

Navigation.displayName = 'Navigation'
Navigation.propTypes = {
  title: string,
  links: array,
  inline: bool,
  renderLink: func,
  toggle: bool,
  onToggle: func,
  theme: shape({
    root: string,
    item: string,
    link: string,
    toggle: string,
    toggleActive: string,
    toggleIcon: string
  }),
  className: string
}

export default Navigation
