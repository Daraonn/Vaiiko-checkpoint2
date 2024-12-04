import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import icon from '../../assets/user_basic.png'
const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to = {'/usersadd'} style={{textDecoration:"none"}}> 
        <div className="sidebar-item">
            <img src={icon} alt="" />
            <p>Pridať použivatela</p>
        </div>
        </Link>
        <Link to = {'/userslist' } style={{textDecoration:"none"}} > 
        <div className="sidebar-item">
            <img src={icon} alt="" />
            <p>Ukázať použivateľov</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar