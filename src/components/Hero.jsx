import React from 'react'
import video from "../Assets/Video.mp4"
const Hero = () => {
  return (
    // modern looking hero section for blog website tailwind css
    <div className="h-screen w-full bg-gradient-to-br from-blue-500/50 to-fuchsia-600/50 flex flex-col justify-center items-center">
        <video src={video} autoPlay loop muted className="absolute object-cover w-full h-full -z-10"/>
        <div className="w-3/4 flex space-y-5 flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-white">Blogify</h1>
            <p className="text-2xl font-medium text-gray-300">A blog website made with tailwind css</p>
            <div className="flex space-x-5 mt-5">
                <button className="bg-white text-black px-4 py-2 rounded-md font-bold hover:bg-blue-600 hover:text-white hover:scale-105 duration-300 active:scale-95 shadow-md active:shadow-none">Login</button>
                <button className="bg-white text-blue px-4 py-2 rounded-md font-bold hover:bg-blue-600 hover:text-white hover:scale-105 duration-300 active:scale-95 shadow-md active:shadow-none">Register</button>
            </div>
        </div>
    </div>
  )
}

export default Hero