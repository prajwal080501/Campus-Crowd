import React, { useState } from 'react'
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar'
import Feed from './../components/Feed';

const Home = ({ open, handleOpen }) => {

  return (
    <div className="flex w-full">
      <Sidebar handleOpen={handleOpen} open={open} />
      <Feed/>
      <Rightbar />
    </div>
  )
}

export default Home