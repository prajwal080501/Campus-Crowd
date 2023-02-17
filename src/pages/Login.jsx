import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Privacy from '../components/Privacy'

const Login = () => {
    return (
        // modern looking login form with tailwind css
        <div className="flex bg-gradient-to-br from-fuchsia-500 to-blue-600 items-center justify-center h-screen">
            <div className="bg-white w-96 rounded-lg shadow-2xl p-6">
                <Logo />
                <h2 className="text-3xl font-semibold text-center">Login</h2>
                <form className="mt-6">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="johndoe@mail.com" />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
                    </div>
                    <div className="flex py-5 justify-between items-center mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:scale-105 hover:bg-blue-600 ease-linear duration-200 active:scale-95 shadow-lg active:shadow-sm">Login</button>
                        <a href="#" className="text-sm text-gray-600 hover:text-blue-500">Forgot Password?</a>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <p className="text-gray-600">Don't have an account?</p>
                        <Link to="/register" className="text-blue-500 hover:text-blue-700 font-semibold ml-2">Sign Up</Link>
                    </div>
                    <Privacy title="Login in" />
                </form>
            </div>
        </div>
    )
}

export default Login