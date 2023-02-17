import React from 'react'
import { Users } from '../dummydata'
import User from './User'

const Rightbar = ({sidebar, handleSidebar}) => {
  return (
    // rightbar component using tailwind css
    <div className={
      sidebar ? "w-[100%] lg:w-[20%] h-[100vh] bg-white fixed top-0 right-0 z-10 transition-all duration-500 ease-in-out transform translate-x-0" : "w-[100%] lg:w-[20%] h-[100vh] bg-white fixed top-0 right-0 z-10 transition-all duration-500 ease-in-out transform translate-x-full"
    }>
      {/* right bar with tailwindcss  */}

        <div className="w-full mt-5 p-3 flex items-center justify-center">
          <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="profile" className="w-[100%] rounded-md" />
        </div>
        <div className="flex flex-col w-full space-y-2 px-3 py-5">
        <p className="text-xl font-bold">Online Friends</p>
          <div className="flex flex-col w-full  mx-auto px-3 py-5 space-y-4">
            {
              Users.map((user) => (
                <User key={user.id} user={user} />
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Rightbar