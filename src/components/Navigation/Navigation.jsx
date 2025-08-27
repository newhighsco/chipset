import { shape, string } from 'prop-types'
import React, { useId } from 'react'

import { classNames } from '../../utils'
import Menubar from '../Menubar'
import SmartLink from '../SmartLink'
import VisuallyHidden from '../VisuallyHidden'

const Navigation = ({
  title = 'Navigation',
  links = [],
  inline,
  renderLink = props => <SmartLink {...props} />,
  toggle,
  onToggle = () => {},
  theme,
  className
}) => {
  const id = useId()

  if (!links.length) return null

  return (
    <nav
      aria-labelledby={id}
      role="navigation"
      className={classNames(theme?.root, className)}
    >
      <VisuallyHidden as="h2" id={id}>
        {title}
      </VisuallyHidden>
      <Menubar
        title={title}
        links={links}
        inline={inline}
        renderLink={renderLink}
        toggle={toggle}
        onToggle={onToggle}
        theme={theme}
      />
    </nav>
  )
}

Navigation.displayName = 'Navigation'
Navigation.propTypes = {
  ...Menubar.propTypes,
  theme: shape({ root: string, ...Menubar.propTypes.theme }),
  className: string
}

export default Navigation
