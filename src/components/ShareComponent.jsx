import React, { useContext, useRef, useState } from 'react'
import { GoFileMedia } from 'react-icons/go'
import { AiFillFileText } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { AuthContext } from '../context/authContext'
import { motion } from "framer-motion";
import axios from 'axios'
const ShareComponent = () => {
    const { user } = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);
    // function to drop down the details pane when i start typing in the input field
    const [details, setDetails] = React.useState(false)
    //   function to move div upwards when scrolled down
    const handleDetails = () => {

        // when double clicked, the details pane will be hidden
        if (details) {
            setDetails(false)
        }
        else {
            setDetails(true)
        }
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            try {
                await axios.post("http://localhost:8000/api/upload", data);
            } catch (error) {
                console.log(error);
            }
        }
        try {
            await axios.post("http://localhost:8000/api/posts", newPost);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className={"w-[95%] h-fit bg-white  sticky top-5 z-10 mx-auto bg-transparent px-2 py-3 rounded-xl drop-shadow-2xl"
            }>
            {/* add a div with blur and low brightness */}
            <div>
                <div className='flex space-x-4 items-center'>
                    <img src={user.profilePicture ? user.profilePicture : "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"} alt="profile" className="w-16 h-16 rounded-full" />
                    <input ref={desc} type="text" placeholder={
                        "What's in your mind?" + " " + user.username
                    } className="w-full bg-gray-100 focus:ring-2 focus:ring-blue-500 duration-200 ease-linear p-3 rounded-lg outline-none text-lg font-medium" onClick={handleDetails} />
                </div>
                <hr className="my-3 bg-gray-400" />
                <div
                    className={
                        details ? "flex flex-col lg:flex-row justify-between duration-200 ease-linear" : "hidden duration-200 ease-linear"
                    }
                    open={details}
                >
                    <form className='flex flex-col w-full lg:flex-row justify-between' onSubmit={submitHandler}>

                        <div className='flex flex-col lg:flex-row space-y-3 lg:space-x-2 lg:space-y-0'>
                            <label htmlFor='file' className="button">
                                <GoFileMedia className="text-xl" />
                                <span className='font-medium'>
                                    Photo/Video
                                </span>
                                <input style={{ display: "none" }} type="file" accept='.png,.jpeg,.jpg' id="file" onChange={(e) => {
                                    setFile(e.target.files[0])
                                }} />
                            </label>
                            <div className="button">
                                <AiFillFileText className="text-xl" />
                                <span className='font-medium'>
                                    Attachment
                                </span>
                            </div>
                            <div className="button">
                                <HiLocationMarker className="text-xl" />
                                <span className='font-normal'>
                                    Location
                                </span>
                            </div>
                        </div>
                        <div className="w-fit p-3">
                            <button type="submit" className="bg-green-500 font-medium text-white px-4 py-2 rounded-md hover:scale-105 hover:bg-green-600 ease-linear duration-200 active:scale-95 shadow-lg active:shadow-sm">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default ShareComponent