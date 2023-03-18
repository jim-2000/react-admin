import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SidebarNav from '../components/sidebar'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import AdminNavbar from '../components/AdminNavbar';
const RootLayout = () => {
 
  return (
  
    <div className='overflow-hidden'>
        <SidebarNav />
    </div>
  )
}

export default RootLayout