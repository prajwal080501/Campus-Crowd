import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="w-full sticky top-0 bg-white p-2  shadow-md flex items-center justify-evenly z-10">
            <div className="w-fit px-4 py-2">
                <p className="text-4xl font-sans cursor-pointer hover:scale-105 hover:text-blue-500 duration-200 ease-linear font-bold">Blogify</p>
            </div>
            <div className="">
                <div className="flex">
                    <div className="flex space-x-5 px-4 py-2">
                        <p className="text-xl font-sans cursor-pointer hover:scale-105 hover:text-blue-500 duration-200 ease-linear font-bold">Home</p>
                        <p className="text-xl font-sans cursor-pointer hover:scale-105 hover:text-blue-500 duration-200 ease-linear font-bold">About</p>
                        <p className="text-xl font-sans cursor-pointer hover:scale-105 hover:text-blue-500 duration-200 ease-linear font-bold">Contact</p>
                    </div>
                </div>
            </div>
            <div className="flex space-x-5 px-4 py-2">
                <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-600 hover:scale-105 duration-300 active:scale-95 shadow-md active:shadow-none">Login</Link>
                <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-600 hover:scale-105 duration-300 active:scale-95 shadow-md active:shadow-none">Register</Link>
            </div>

        </div>
    )
}

export default Header