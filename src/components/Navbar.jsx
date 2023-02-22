import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiFillBell, AiOutlineSearch } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { HiMenuAlt1 } from 'react-icons/hi'
import Button from './Button';
import { AuthContext } from '../context/authContext'
const Navbar = ({ open, handleOpen }) => {
    const { user } = useContext(AuthContext);

    return (
        <div className="sticky top-0 z-20 bg-white flex items-center shadow-sm w-screen justify-between h-fit px-6 py-3 space-x-5">
            {/* menu button icon */}
            <div className="flex items-center justify-center h-full">
                <HiMenuAlt1 onClick={handleOpen} className="text-2xl hover:text-blue-500 font-bold cursor-pointer duration-200 hover:scale-105 ease-linear" />
            </div>

            <div className='flex items-center'>
                <Link to="/" className="hidden lg:inline text-3xl text-blue-500 font-bold">
                    Campus<span className="text-black font-bold">Crowd</span>
                </Link>
            </div>
            <div className='flex flex-1 items-center'>
                <div className="w-[70%] mx-auto bg-gray-100 rounded-full px-5 ring-1 ring-blue-500 outline-none flex items-center focus:drop-shadow focus:outline-none duration-200 ease-linear shadow-sm">
                    <input type="text" className="w-full text-lg font-bold bg-transparent px-3 py-1  flex-grow outline-none " placeholder="Search" />
                    <AiOutlineSearch className="text-2xl cursor-pointer  hover:text-black duration-200 hover:scale-105 ease-linear text-gray-500" />
                </div>
            </div>
            <Link to={
                `/profile/${user?.username}`
            } className="flex items-center space-x-4">
                <AiFillBell className="text-2xl cursor-pointer hover:text-black duration-200 hover:scale-105 ease-linear text-gray-500" />
            </Link>
            <div className="hidden lg:inline-flex space-x-5 items-center">
                {
                    user ? (
                        <>
                        <Link to={`/profile/${user.username}`} className="flex space-x-3">
                            <p className="text-lg bg-blue-500 p-2 text-white rounded-lg shadow-sm font-bold">{user.username}</p>
                            <img src={user.profilePicture} alt="" className="w-10 h-10 rounded-full object-cover" />
                        </Link>
                        <Link to="/login">
                            <FiLogOut className="text-2xl cursor-pointer hover:text-black duration-200 hover:scale-105 ease-linear text-gray-500" />
                        </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <Button text="Login">Login</Button>
                            </Link>
                            <Link to="/register">
                                <Button text="Register">Register</Button>
                            </Link>
                        </>
                    )

                }
            </div>
        </div>
    )
}

export default Navbar