import React from 'react'
import { GoFileMedia } from 'react-icons/go'
import { AiFillFileText } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
const ShareComponent = () => {
    // function to drop down the details pane when i start typing in the input field
    const [details, setDetails] = React.useState(false)
    //   function to move div upwards when scrolled down
    const handleDetails = () => {
        setDetails(!details)
    }

    return (
        <div className={"w-[95%] h-fit bg-white  sticky top-5 z-10 mx-auto bg-transparent px-2 py-3 rounded-xl drop-shadow-2xl"
        }>
            {/* add a div with blur and low brightness */}
            <div>
                <div className='flex space-x-4 items-center'>
                    <img src="https://via.placeholder.com/250" alt="profile" className="w-10 h-10 rounded-full" />
                    <input type="text" placeholder="What's on your mind?" className="w-full bg-gray-100 focus:ring-2 focus:ring-blue-500 duration-200 ease-linear p-3 rounded-lg outline-none text-lg font-medium" onClick={handleDetails} />
                </div>
                <hr className="my-3 bg-gray-400" />
                <div className={
                    details ? "flex flex-col lg:flex-row justify-between duration-200 ease-linear" : "hidden duration-200 ease-linear"
                }
                    open={details}
                >
                    <div className='flex flex-col w-full lg:flex-row justify-between'>

                        <div className='flex flex-col lg:flex-row space-y-3 lg:space-x-2 lg:space-y-0'>
                            <div className="button">
                                <GoFileMedia className="text-xl" />
                                <span className='font-medium'>
                                    Photo/Video
                                </span>
                            </div>
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
                            <button className="bg-green-500 font-medium text-white px-4 py-2 rounded-md hover:scale-105 hover:bg-green-600 ease-linear duration-200 active:scale-95 shadow-lg active:shadow-sm">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareComponent