import { any, array, bool, func, node, oneOf, shape, string } from 'prop-types'
import React, { useId } from 'react'

import { useToggle } from '../../hooks'
import { classNames } from '../../utils'
import Button from '../Button'
import Icon from '../Icon'
import List from '../List'

const ICONS = { false: 'material-symbols:menu', true: 'material-symbols:close' }
const LABELS = { false: 'Show', true: 'Hide' }

const Menubar = ({
  title,
  role = 'menubar',
  links = [],
  inline,
  renderLink = props => <Button {...props} />,
  toggle,
  onToggle = () => {},
  theme
}) => {
  const [visible, setVisibility] = useToggle(!toggle)
  const listId = useId()

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
          aria-controls={listId}
          aria-expanded={visible}
          aria-label={`${LABELS[visible]} ${title}`}
          aria-haspopup
          onClick={toggleVisibility}
          theme={{ root: theme?.toggle, active: theme?.toggleActive }}
        >
          {toggle.children}
          <Icon theme={{ root: theme?.toggleIcon }} name={icons[visible]} />
        </Button>
      )}
      <List
        id={listId}
        role={role}
        unstyled
        inline={inline}
        theme={{ root: theme?.list, inline: theme?.inline }}
      >
        {links.map(({ links = [], ...rest }, index) => {
          const props = { ...rest, className: theme?.link }
          const hasLinks = !!links.length

          return (
            <li
              key={index}
              role="menuitem"
              className={classNames(theme?.item, hasLinks && theme?.itemToggle)}
            >
              {!hasLinks ? (
                renderLink(props, index)
              ) : (
                <Menubar
                  title="Sub-navigation"
                  role="menu"
                  links={links}
                  toggle={{
                    icons: {
                      false: 'material-symbols:arrow-drop-down',
                      true: 'material-symbols:arrow-drop-up'
                    },
                    ...props
                  }}
                  theme={{ ...theme, toggle: theme?.link }}
                />
              )}
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
  toggle: oneOf([
    bool,
    shape({ icons: { true: any, false: any }, children: node })
  ]),
  onToggle: func,
  theme: shape({
    list: string,
    item: string,
    itemToggle: string,
    link: string,
    toggle: string,
    toggleActive: string,
    toggleIcon: string
  })
}

export default Menubar
