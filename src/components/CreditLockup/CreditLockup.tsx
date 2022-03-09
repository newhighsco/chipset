import React, { FC } from 'react'
import classNames from 'classnames'
import { Icon, SmartLink } from '..'
import { CreditLockupProps } from './CreditLockup.types'

import { ReactComponent as LogoSvg } from './images/logo.svg'

const name = 'New High Score'
const title = `${name} - Extending your favourite end-game`
const prefix = 'Proudly brought to you by'
const href = 'http://newhighsco.re'

/**
 * The `CreditLockup` provides a link to the New High Score website
 */
const CreditLockup: FC<CreditLockupProps> = ({ theme, className, ...rest }) => (
  <span className={classNames(theme?.root, className)} {...rest}>
    <SmartLink
      className={theme?.link}
      href={href}
      target="_blank"
      title={title}
    >
      <Icon className={theme?.logo} alt={name}>
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

export default CreditLockup
