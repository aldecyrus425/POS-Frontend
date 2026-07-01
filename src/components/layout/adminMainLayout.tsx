import React, { type ReactElement } from 'react'
import NavBar from './navBar';
import Header from './header';
import { Outlet } from 'react-router-dom';


const AdminMainLayout = () => {
  return (
    <div className='w-screen h-screen bg-slate-100 flex '>
      {/* Navbar */}
      <NavBar/>
      {/* Header */}
      <Header>
        <div className='w-full h-full p-4'>
          <Outlet />
        </div>
      </Header>
      
    </div>
  )
}

export default AdminMainLayout