import React from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'
import Logo from './Logo'
const Sidebar = ({ handleOpen, open }) => {
    return (
        // sidebar component using tailwind css
        <>
            <div className="fixed top-0 left-0 w-full h-screen bg-black z-40 opacity-50" style={{ display: open ? "block" : "none" }}></div>

            <div className={
                open ? "translate-x-0 duration-200 overflow-y-scroll ease-linear fixed top-0 left-0 w-72 h-screen bg-white z-50 shadow-lg" : "-translate-x-full duration-200 ease-linear fixed top-0 left-0 w-72 h-screen bg-white z-50 shadow-lg"
            }>

                {/* close button icon */}
                <div className="flex items-center justify-between p-4">
                    {/* <Logo/> */}
                    <AiFillCloseCircle onClick={handleOpen} className="text-2xl cursor-pointer hover:text-black duration-200 hover:scale-105 ease-linear" onClick={handleOpen} />
                </div>
                <ul className="flex flex-col w-full space-y-2 px-3 py-5">
                    <li className="menu">
                        <span className="text-xl font-bold">Home</span>
                        <span className="text-2xl font-bold">🏠</span>
                    </li>
                    <li className="menu">
                        <span className="text-xl font-bold">Explore</span>
                        <span className="text-2xl font-bold">🔎</span>
                    </li>
                    <li className="menu">
                        <span className="text-xl font-bold">Notifications</span>
                        <span className="text-2xl font-bold">🔔</span>
                    </li>
                    <li className="menu">
                        <span className="text-xl font-bold">Messages</span>
                        <span className="text-2xl font-bold">📩</span>
                    </li>
                    <li className="menu">
                        <span className="text-xl font-bold">Bookmarks</span>
                        <span className="text-2xl font-bold">🔖</span>
                    </li>
                    <li className="menu">
                        <span className="text-xl font-bold">Lists</span>
                        <span className="text-2xl font-bold">📋</span>
                    </li>
                    <li className="menu">
                        <span className="text-xl font-bold">Profile</span>
                        <span className="text-2xl font-bold">👤</span>
                    </li>
                    <li className="menu">
                        <span className="text-xl font-bold">More</span>
                        <HiMenuAlt3 className="text-2xl font-bold" />
                    </li>
                </ul>
                <hr className="border-gray-300" />
                {/* name and image */}
                <div className="flex flex-col w-full -space-y-4">
                    <div className="flex flex-col w-full  mx-auto px-3 py-5">
                        <div className="flex bg-gray-100 px-3 py-2 flex-row justify-center items-center space-x-4">
                            <img src="https://via.placeholder.com/150 " alt="profile" className="w-10 h-10 rounded-full" />
                            <span className="text-xl font-bold">Name</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full  mx-auto px-3 py-5">
                        <div className="flex bg-gray-100 px-3 py-2 flex-row justify-center items-center space-x-4">
                            <img src="https://via.placeholder.com/150 " alt="profile" className="w-10 h-10 rounded-full" />
                            <span className="text-xl font-bold">Name</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full  mx-auto px-3 py-5">
                        <div className="flex bg-gray-100 px-3 py-2 flex-row justify-center items-center space-x-4">
                            <img src="https://via.placeholder.com/150 " alt="profile" className="w-10 h-10 rounded-full" />
                            <span className="text-xl font-bold">Name</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full  mx-auto px-3 py-5">
                        <div className="flex bg-gray-100 px-3 py-2 flex-row justify-center items-center space-x-4">
                            <img src="https://via.placeholder.com/150 " alt="profile" className="w-10 h-10 rounded-full" />
                            <span className="text-xl font-bold">Name</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full  mx-auto px-3 py-5">
                        <div className="flex bg-gray-100 px-3 py-2 flex-row justify-center items-center space-x-4">
                            <img src="https://via.placeholder.com/150 " alt="profile" className="w-10 h-10 rounded-full" />
                            <span className="text-xl font-bold">Name</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full  mx-auto px-3 py-5">
                        <div className="flex bg-gray-100 px-3 py-2 flex-row justify-center items-center space-x-4">
                            <img src="https://via.placeholder.com/150 " alt="profile" className="w-10 h-10 rounded-full" />
                            <span className="text-xl font-bold">Name</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full  mx-auto px-3 py-5">
                        <div className="flex bg-gray-100 px-3 py-2 flex-row justify-center items-center space-x-4">
                            <img src="https://via.placeholder.com/150 " alt="profile" className="w-10 h-10 rounded-full" />
                            <span className="text-xl font-bold">Name</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full  mx-auto px-3 py-5">
                        <div className="flex bg-gray-100 px-3 py-2 flex-row justify-center items-center space-x-4">
                            <img src="https://via.placeholder.com/150 " alt="profile" className="w-10 h-10 rounded-full" />
                            <span className="text-xl font-bold">Name</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full  mx-auto px-3 py-5">
                        <div className="flex bg-gray-100 px-3 py-2 flex-row justify-center items-center space-x-4">
                            <img src="https://via.placeholder.com/150 " alt="profile" className="w-10 h-10 rounded-full" />
                            <span className="text-xl font-bold">Name</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full  mx-auto px-3 py-5">
                        <div className="flex bg-gray-100 px-3 py-2 flex-row justify-center items-center space-x-4">
                            <img src="https://via.placeholder.com/150 " alt="profile" className="w-10 h-10 rounded-full" />
                            <span className="text-xl font-bold">Name</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar