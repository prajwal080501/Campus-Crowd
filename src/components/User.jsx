import React from 'react'

const User = ({ user }) => {
    return (
        <div className="flex bg-gray-100 w-full px-3 py-2 rounded-lg flex-row justify-start items-center space-x-4">
            <img src="https://via.placeholder.com/150 " alt="profile" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold">{user.name}</span>
            {/* green dot */}
            <span className="bg-green-500 w-3 h-3 rounded-full"></span>
        </div>
    )
}

export default User