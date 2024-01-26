import React from 'react'
import SideBar from './SideBar'
import MianConatiner from './MianConatiner'
import { Outlet, createBrowserRouter } from 'react-router-dom'



const Body = () => {
  return (
    <div className='flex relative'>
        <SideBar/>
        <Outlet />
    </div>
  )
}

export default Body