import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import Privacy from '../components/Privacy'
import axios from "axios"
const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();


    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Passwords don't match");
        }
        else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post('/api/auth/register', user);
                navigate('/login');
            } catch (error) {
                console.log(error);
            }
        }

    }
    return (
        <div className="flex bg-gradient-to-br from-fuchsia-500 to-blue-600 overflow-y-hidden items-center justify-center h-screen lg:h-screen">
            <div className="bg-white w-[95%] lg:w-fit h-fit flex items-center flex-wrap justify-center rounded-lg shadow-2xl p-6">
                <Logo />
                <h2 className="text-3xl font-semibold text-center w-full">Register</h2>
                <form className="mt-6 max-w-7xl px-5 py-3" onSubmit={handleClick}>
                    <div className="grid grid-cols-1 md:grid-cols-2 -mx-3 mb-6 items-center justify-evenly">
                        <div className='p-3'>
                            <label className="block text-gray-700 text-center lg:text-left">Username</label>
                            <input ref={username} type="text" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="johndoe" required />
                        </div>
                        <div className='p-3'>
                            <label className="block text-gray-700 text-center lg:text-left">Email</label>
                            <input ref={email} type="email" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="johndoe@mail.com" required />
                        </div>
                        <div className='p-3'>
                            <label className="block text-gray-700 text-center lg:text-left">Password</label>
                            <input ref={password} minLength="6" type="password" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
                        </div>
                        <div className='p-3'>
                            <label className="block text-gray-700 text-center lg:text-left">Confirm Password</label>
                            <input ref={passwordAgain} type="password" className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Confirm your password" />
                        </div>
                    </div>
                    <div className="flex py-5 justify-center items-center mt-4">
                        <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:scale-105 hover:bg-blue-600 ease-linear duration-200 active:scale-95 shadow-lg active:shadow-sm">Register</button>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <p className="text-gray-600">Already have an account?</p>
                        <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold ml-2">Login</Link>
                    </div>
                    {/* privacy message */}
                    <Privacy title="Signing up" />
                </form>
            </div>
        </div>
    )
}

export default Register