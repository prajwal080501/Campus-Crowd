import React, { useState } from 'react'
import Feed from './../components/Feed';

const Home = ({ open, handleOpen, sidebar, handleSidebar }) => {

  return (
    <div className="flex w-full bg-white">
      <Feed />
    </div>
  )
}

export default Home