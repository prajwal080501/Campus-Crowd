import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="px-4 py-5 mb-5 w-full text-center">
    <h2 className="text-4xl text-blue-500 font-sans">
        Campus<span className="text-black font-sans">Crowd</span>
    </h2>
</Link>
  )
}

export default Logo