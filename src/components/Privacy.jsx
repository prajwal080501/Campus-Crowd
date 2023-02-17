import React from 'react'

const Privacy = ({title}) => {
    return (
        <div className="flex flex-col justify-center items-center mt-6">
            <p className="text-gray-600">By {title}, you agree to our</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold ml-2">Terms of Service</a>
            <p className="text-gray-600">and</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold ml-2">Privacy Policy</a>
        </div>
    )
}

export default Privacy