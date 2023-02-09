import React from 'react'

import './Logo.scss'
import logo from '../../img/logo.svg'

const Logo: React.FC = () => {
  return (
    <div className="logo-wrapper">
      <img src={logo} alt="" />
    </div>
  )
}

export default Logo
