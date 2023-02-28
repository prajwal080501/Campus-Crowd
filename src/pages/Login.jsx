import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Privacy from '../components/Privacy'
import video from "../Assets/video.mp4"
import { LoginCall } from '../apiCalls'
import { AuthContext } from '../context/authContext'
import CircleLoader from "react-spinners/CircleLoader"
const Login = () => {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        LoginCall({ email: email.current.value, password: password.current.value }, dispatch)
    }
    console.log(user);
    return (
        // modern looking login form with tailwind css
        <div className="flex justify-center flex-col min-h-screen">
            {/* add a video as a background */}
            <video autoPlay loop muted className="fixed top-0 left-0 w-full blur-sm brightness-75 h-full object-cover z-0">
                <source src={video} type="video/mp4" />
            </video>
            {/* Form */}
            <div className="flex flex-col z-10 flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    <form className=" bg-white rounded-lg items-center shadow-xl px-8 py-10">
                        <div className="flex flex-col items-center justify-center h-32">
                            <Logo />
                            <h1 className="text-2xl font-bold mt-2">Welcome back!</h1>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 focus:ring-blue-400"
                                placeholder="Your email"
                                required
                                ref={email}
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 focus:ring-blue-400"
                                placeholder="Your password"
                                required
                                minLength={6}
                                ref={password}
                            />
                        </div>

                        <div className="mb-6">
                            <button
                                onClick={handleClick}
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                            >
                                {
                                    isFetching ? <CircleLoader 
                                    color={"#fff"}
                                    loading={isFetching}
                                    size={20}
                                    /> : "Login"
                                }
                            </button>
                        </div>

                        <p className="text-sm text-gray-600 text-center">
                            Don't have an account yet?{" "}
                            <Link to="/register" className="text-blue-600 hover:text-blue-700">
                                Sign up here.
                            </Link>
                        </p>
                        <Privacy title="Login"/>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login