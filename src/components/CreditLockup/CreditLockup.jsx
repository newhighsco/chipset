import React from 'react'
import { oneOf, shape, string } from 'prop-types'
import Element from '../Element'
import { SmartLink } from '../SmartLink'
import { Icon } from '../Icon'

import LogoSvg from './new-high-score.svg'

const name = 'New High Score'
const title = `${name} - Extending your favourite end-game`
const prefix = 'Proudly brought to you by'
const href = 'http://newhighsco.re'

const CreditLockup = ({ theme, ...rest }) => (
  <Element className={theme.wrapper} {...rest}>
    <SmartLink
      className={theme.link}
      href={href}
      eventLabel="credit"
      target="_blank"
      title={title}
    >
      <Icon theme={{ wrapper: theme.logo }} a11yText={name}>
        <LogoSvg />
      </Icon>
      <span className={theme.text}>
        <small>{prefix}</small>
        <br />
        <small>{name}</small>
      </span>
    </SmartLink>
  </Element>
)

CreditLockup.propTypes = {
  align: oneOf(['left', 'right', 'center']),
  dir: oneOf(['ltr', 'rtl']),
  theme: shape({ wrapper: string, link: string, logo: string, text: string })
}

export default CreditLockup
export { CreditLockup }
