import React, { useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { SlUserFollow } from 'react-icons/sl'
import { FiShare } from 'react-icons/fi'
import {format} from "timeago.js"
import axios from 'axios'
import { Link } from 'react-router-dom'
const Post = ({ post, username }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`https://student-network-web-app.onrender.com/api/users?userId=${post.userId}`)
            console.log(res);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId])
    return (
        // post component using tailwind css
        <div className="w-[95%] mx-auto px-3 mb-5 drop-shadow-xl py-4 bg-white rounded-lg">
            {/* header */}

            <div className="flex justify-between items-center px-5">
                <div className="flex items-center space-x-3">
                    <Link to={`/profile/${user.username}`}>
                    <img src={
                        user.profilePicture || "https://conferenceoeh.com/wp-content/uploads/profile-pic-dummy.png"
                    } alt="profile" className="w-10 h-10 rounded-full object-cover" />
                    </Link>
                    <span className="text-xl font-bold ml-2">{user.username}</span>
                </div>
                {!username &&<div className="flex items-center space-x-3">
                    <button className="bg-green-500 font-medium text-white px-4 py-2 rounded-md hover:scale-105 hover:bg-green-600 ease-linear duration-200 active:scale-95 shadow-lg active:shadow-sm">
                        <SlUserFollow className="text-2xl font-bold p-1" />
                    </button>
                </div>}
            </div>
            {/* body */}
            <div className="flex bg-white rounded-lg flex-col w-full  mx-auto px-1 py-3">
                <p className="text-lg font-medium">{
                    post?.desc}
                </p>
                {
                    post?.img && 
                    <img src={post?.img} alt="post" className="w-[100%] object-cover mx-auto h-96 rounded-lg mt-3" />

                }
            </div>
            {/* footer */}
            <div className="flex items-center justify-between w-full px-3 py-2">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center cursor-pointer space-x-2">
                        <AiFillHeart className="text-4xl text-red-500 hover:scale-110 duration-200 ease-linear" />
                        <span className="text-xl font-medium">{
                            post.like?.length
                        }</span>
                    </div>
                    <div className="flex items-center cursor-pointer space-x-2">
                        <FaRegComment className="text-3xl text-black/50 hover:scale-110 duration-200 ease-linear" />
                        <span className="text-xl font-medium">{post.comment}</span>
                    </div>
                    <div className="flex items-center cursor-pointer space-x-2">
                        <FiShare className="text-3xl text-black/50 hover:scale-110 duration-200 ease-linear" />
                    </div>
                </div>
                {/* date*/}
                <div className="flex bg-gray-100 px-2 py-1 rounded-md items-center space-x-2">
                    <span className="text-base font-medium text-black">{
                        format(post.createdAt)
                    }</span>
                    </div>
            </div>
        </div>
    )
}

export default Post