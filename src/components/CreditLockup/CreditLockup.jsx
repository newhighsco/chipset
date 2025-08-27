import { oneOf, shape, string } from 'prop-types'
import React from 'react'

import { classNames } from '../../utils'
import Icon from '../Icon'
import SmartLink from '../SmartLink'
import { ReactComponent as LogoSvg } from './images/logo.svg'

const name = 'New High Score'
const title = `${name} - Extending your favourite end-game`
const prefix = 'Proudly brought to you by'
const href = 'http://newhighsco.re'

/**
 * The `CreditLockup` provides a link to the New High Score website
 */
const CreditLockup = ({ theme, className, ...rest }) => (
  <span className={classNames(theme?.root, className)} {...rest}>
    <SmartLink
      className={theme?.link}
      href={href}
      target="_blank"
      title={title}
      disabled
    >
      <Icon theme={{ root: theme?.logo }} alt={name}>
        <LogoSvg />
      </Icon>
      <span className={theme?.text}>
        <small>{prefix}</small>
        <br />
        <small>{name}</small>
      </span>
    </SmartLink>
  </span>
)

CreditLockup.displayName = 'CreditLockup'
CreditLockup.propTypes = {
  align: oneOf(['left', 'right', 'center']),
  dir: oneOf(['ltr', 'rtl']),
  theme: shape({ root: string, link: string, logo: string, text: string }),
  className: string
}

export default CreditLockup
