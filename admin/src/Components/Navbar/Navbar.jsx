import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo-placeholder.png'
import user_icon from '../../assets/user_basic.png'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" className="nav-logo" />
        </div>
        <div className="nav-icon">
            <img src={user_icon} alt="" className="nav-icon" />
        </div>
        
    </div>
  )
}

export default Navbar