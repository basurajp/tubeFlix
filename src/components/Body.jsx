import React from 'react'
import SideBar from './SideBar'
import MianConatiner from './MianConatiner'

const Body = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <MianConatiner/>
    </div>
  )
}

export default Body