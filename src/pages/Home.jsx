import React, { useState } from 'react'
import Floatbutton from '../components/Floatbutton';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar'
import Feed from './../components/Feed';

const Home = ({ open, handleOpen, sidebar, handleSidebar }) => {

  return (
    <div className="flex w-full bg-white">
      <Floatbutton sidebar={sidebar} handleSidebar={handleSidebar} />
      <Sidebar handleOpen={handleOpen} open={open} />
      <Feed />
      <Rightbar sidebar={sidebar} handleSidebar={handleSidebar} />
    </div>
  )
}

export default Home