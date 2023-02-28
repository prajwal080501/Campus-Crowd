import React, { useState } from 'react'
import Feed from './../components/Feed';
import { motion } from "framer-motion"
const Home = ({ open, handleOpen, sidebar, handleSidebar }) => {

  return (
    <motion.div 
      initial={{x: 0}}
      animate={{x: sidebar ? 300 : 0}}
      transition={{duration: 0.3}}
    className="flex w-full bg-white">
      {/* greet user based on the time and show a react icon */}

      <Feed />
    </motion.div>
  )
}

export default Home