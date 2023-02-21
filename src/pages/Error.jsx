import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    // custom modern looking 404 page
    <div className="flex flex-col items-center justify-center space-y-5 h-screen">
      <p className="text-[8rem] animate-bounce lg:text-[12rem] font-bold text-gray-500">🥺</p>
      <h1 className="text-9xl font-bold text-gray-500">404</h1>
      <h2 className="text-6xl font-bold text-gray-500">Page Not Found</h2>
      <p className="text-2xl font-medium text-gray-500">The page you are looking for does not exist</p>
      <div className="w-1/2 flex items-center justify-center bg-gray-200 p-5 rounded-lg drop-shadow-lg">
        <Link to="/" className="text-xl text-center font-medium text-gray-500">You can go back to the <a href="/" className="text-blue-500">Home Page</a></Link>
      </div>
    </div>
  )
}

export default Error