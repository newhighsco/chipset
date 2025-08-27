import { any, array, bool, func, oneOf, shape, string } from 'prop-types'
import React, { useId } from 'react'

import { useToggle } from '../../hooks'
import Button from '../Button'
import Icon from '../Icon'
import List from '../List'
import SmartLink from '../SmartLink'
import { ReactComponent as ArrowDownSvg } from './images/arrow-down.svg'
import { ReactComponent as ArrowUpSvg } from './images/arrow-up.svg'
import { ReactComponent as CloseSvg } from './images/close.svg'
import { ReactComponent as MenuSvg } from './images/menu.svg'

const ICONS = { true: <CloseSvg />, false: <MenuSvg /> }
const LABELS = { false: 'Show', true: 'Hide' }

const Menubar = ({
  title,
  role = 'menubar',
  links = [],
  inline,
  renderLink = props => <SmartLink {...props} />,
  toggle,
  onToggle = () => {},
  theme
}) => {
  const [visible, setVisibility] = useToggle(!toggle)
  const id = useId()

  console.log(111, theme)

  if (!links.length) return null

  const icons = toggle?.icons || ICONS

  const toggleVisibility = () => {
    setVisibility()
    onToggle({ visible })
  }

  return (
    <>
      {toggle && (
        <Button
          active={visible}
          aria-controls={id}
          aria-expanded={visible}
          onClick={toggleVisibility}
          theme={{ root: theme?.toggle, active: theme?.toggleActive }}
        >
          <Icon
            theme={{ root: theme?.toggleIcon }}
            alt={`${LABELS[visible]} ${title}`}
          >
            {icons[visible]}
          </Icon>
        </Button>
      )}
      <List
        id={id}
        role={role}
        unstyled
        inline={inline}
        hidden={!visible}
        theme={{ root: theme?.list, inline: theme?.inline }}
      >
        {links.map(({ links, ...rest }, index) => {
          const props = { ...rest, className: theme?.link }

          return (
            <li key={index} role="menuitem" className={theme?.item}>
              {renderLink(props, index)}
              <Menubar
                title="Sub-navigation"
                role="menu"
                links={links}
                toggle={{
                  icons: { true: <ArrowUpSvg />, false: <ArrowDownSvg /> }
                }}
                theme={theme?.menu}
              />
            </li>
          )
        })}
      </List>
    </>
  )
}

Menubar.displayName = 'Menubar'
Menubar.propTypes = {
  title: string,
  role: string,
  links: array,
  inline: bool,
  renderLink: func,
  toggle: oneOf(bool, shape({ icons: { true: any, false: any } })),
  onToggle: func,
  theme: shape({
    list: string,
    item: string,
    link: string,
    toggle: string,
    toggleActive: string,
    toggleIcon: string,
    menu: shape({
      list: string,
      item: string,
      link: string,
      toggle: string,
      toggleActive: string,
      toggleIcon: string
    })
  })
}

export default Menubar
