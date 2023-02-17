import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {SlUserFollow} from 'react-icons/sl'
import {FiShare} from 'react-icons/fi'
const Post = ({post}) => {
    return (
        // post component using tailwind css
        <div className="w-[95%] mx-auto px-3 mb-5 drop-shadow-xl py-4 bg-white rounded-lg">
            {/* header */}

           <div className="flex justify-between items-center px-5">
                <div className="flex items-center space-x-3">
                <img src="https://images.unsplash.com/photo-1616161610003-8b5e1b2b5f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profile" className="w-10 h-10 rounded-full object-cover" />
                <span className="text-xl font-bold ml-2">Prajwal Ladkat</span>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="bg-green-500 font-medium text-white px-4 py-2 rounded-md hover:scale-105 hover:bg-green-600 ease-linear duration-200 active:scale-95 shadow-lg active:shadow-sm">
                        <SlUserFollow className="text-2xl font-bold p-1" />
                    </button>
                    </div>
            </div>
            {/* body */}
            <div className="flex bg-white rounded-lg flex-col w-full  mx-auto px-1 py-3">
                <p className="text-lg font-medium">{
                    post?.desc}
                </p>
                <img src={post.photo} alt="post" className="w-[100%] object-cover mx-auto h-96 rounded-lg mt-3" />
            </div>
            {/* footer */}
            <div className="flex items-center justify-between w-full px-3 py-2">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center cursor-pointer space-x-2">
                        <AiFillHeart className="text-4xl text-red-500 hover:scale-110 duration-200 ease-linear" />
                        <span className="text-xl font-medium">{post.like}</span>
                    </div>
                    <div className="flex items-center cursor-pointer space-x-2">
                        <FaRegComment className="text-3xl text-black/50 hover:scale-110 duration-200 ease-linear" />
                        <span className="text-xl font-medium">{post.comment}</span>
                    </div>
                    <div className="flex items-center cursor-pointer space-x-2">
                        <FiShare className="text-3xl text-black/50 hover:scale-110 duration-200 ease-linear" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post