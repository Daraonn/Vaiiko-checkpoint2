import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route,Routes } from 'react-router-dom'
import AddUser from '../../Components/AddUser/AddUser'
import ListUser from '../../Components/ListUser/ListUser'
const Admin = () => {
  return (
    <div className="admin">
      <Sidebar/>
      <Routes>
        <Route path = '/usersadd' element = {<AddUser/>}/>
        <Route path = '/userslist' element = {<ListUser/>}/>
      </Routes>

    </div>
  )
}

export default Admin