import React from 'react'
import { array, bool, func, shape, string } from 'prop-types'
import classNames from 'classnames'
import { useToggle } from '../../hooks'
import Button from '../Button'
import Icon from '../Icon'
import List from '../List'
import SmartLink from '../SmartLink'
import VisuallyHidden from '../VisuallyHidden'

import { ReactComponent as MenuSvg } from './images/menu.svg'
import { ReactComponent as CloseSvg } from './images/close.svg'

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

  if (!links.length) return null

  const toggleVisibility = () => {
    setVisibility()
    onToggle({ visible })
  }

  return (
    <nav role="navigation" className={classNames(theme?.root, className)}>
      <VisuallyHidden as="h2">{title}</VisuallyHidden>
      {toggle && (
        <Button
          active={visible}
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
