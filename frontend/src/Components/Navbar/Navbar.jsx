import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo-placeholder.png'
import kosik from '../Assets/kosik.png'
import user_icon from '../Assets/user_basic.png'
import home_icon from '../Assets/home_white.png'
import mobil_icon from '../Assets/mobil.png'
import laptop_icon from '../Assets/laptop.png'
import monitor_icon from '../Assets/monitor.png'
import desktop_icon from '../Assets/desktop.png'

export const Navbar = () => {

  return (
    <div className="navbar-wrapper">

      <div className='navbar'>
        <div className="nav-logo">
          <Link to='/'><img src={logo} alt="Site Logo" /></Link>
        </div>
        <div className="nav-login-cart">
          <img src={user_icon} alt="User Icon" />
          <Link to='/login'><button name="login_button">Prihlásiť sa</button></Link>
          <Link to='/cart'><img src={kosik} alt="Cart Icon" /></Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>

   
      <div className="nav-menu">
        <div className="menu-domov">
          <Link to='/'><button><img src={home_icon} alt="Home Icon" />Domov</button></Link>
        </div>
        <div className="menu-notebooky">
          <Link to='/laptop'><button><img src={laptop_icon} alt="Laptops Icon" />Notebooky</button></Link>
        </div>
        <div className="menu-mobily">
          <Link to='/mobile'><button><img src={mobil_icon} alt="Mobiles Icon" />Mobily</button></Link>
        </div>
        <div className="menu-monitory">
          <Link to='/monitor'><button><img src={monitor_icon} alt="Monitors Icon" />Monitory</button></Link>
        </div>
        <div className="menu-desktop">
          <Link to='/desktop'><button><img src={desktop_icon} alt="Desktops Icon" />Desktop</button></Link>
        </div>
        <div className="menu-prislusenstvo">
          <Link to='/accessories'><button>Príslušenstvo</button></Link>
        </div>
      </div>
    </div>
  );
};