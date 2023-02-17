import React from 'react'

const Profile = () => {
  return (
    // modern lookin profile page using tailwind
    <div className="flex flex-col w-full h-[100vh] bg-gray-100 overflow-y-auto">
      <div className="flex flex-col items-center justify-center w-full h-[20%] bg-gradient-to-r from-blue-400 to-blue-500">
        <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600"

          alt="profile" className="w-32 h-32 rounded-full mt-10" />
        <p className="text-2xl font-bold text-white mt-2">John Doe</p>
        <p className="text-lg font-medium text-white mt-2">Software Engineer</p>
      </div>
      </div>
  )
}

export default Profile