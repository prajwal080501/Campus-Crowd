import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Privacy from '../components/Privacy'

const Register = () => {
    return (
        // register page using tailwind css same design as login page
        <div className="flex bg-gradient-to-br from-fuchsia-500 to-blue-600 items-center justify-center h-fit lg:h-screen">
            <div className="bg-white w-[90%] flex items-center flex-wrap justify-center rounded-lg shadow-2xl p-6">
                <Logo/>
                <h2 className="text-3xl font-semibold text-center w-full">Register</h2>
                <form className="mt-6 max-w-7xl px-5 py-3">
                    <div className="flex flex-wrap -mx-3 mb-6 items-center justify-evenly">
                        <div className='p-3'>
                            <label className="block text-gray-700 text-center lg:text-left">Cover Picture</label>
                            <input type="file" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="johndoe@mail.com" />
                        </div>
                        <div className='p-3'>
                            <label className="block text-gray-700 text-center lg:text-left">Profile Picture</label>
                            <input type="file" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="johndoe@mail.com" />
                        </div>
                        <div className='p-3'>
                            <label className="block text-gray-700 text-center lg:text-left">Username</label>
                            <input type="text" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="johndoe" />
                        </div>

                        <div className='p-3'>
                            <label className="block text-gray-700 text-center lg:text-left">City</label>
                            <input type="text" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Pune Maharashtra, India" />
                        </div>
                        {/* degree */}
                        <div className='p-3'>
                            <label className="block text-gray-700 text-center lg:text-left">Degree</label>
                            <input type="text" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="B.Tech" />
                        </div>
                        {/* passing year input */}
                        <div className='p-3'>
                            <label className="block text-gray-700 text-center lg:text-left">Passing Year</label>
                            <input type="number" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="2021" />
                        </div>

                        <div className='p-3'>
                            <label className="block text-gray-700 text-center lg:text-left">Email</label>
                            <input type="email" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="johndoe@mail.com" />
                        </div>
                        <div className='p-3'>
                            <label className="block text-gray-700 text-center lg:text-left">Password</label>
                            <input type="password" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
                        </div>
                    </div>
                    <div className="flex py-5 justify-center items-center mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:scale-105 hover:bg-blue-600 ease-linear duration-200 active:scale-95 shadow-lg active:shadow-sm">Register</button>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <p className="text-gray-600">Already have an account?</p>
                        <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold ml-2">Login</Link>
                    </div>
                    {/* privacy message */}
                    <Privacy title="Signing up"/>
                </form>
            </div>
        </div>
    )
}

export default Register