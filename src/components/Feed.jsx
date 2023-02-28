import React, { useContext } from 'react'
import FeedBox from './FeedBox'
import ShareComponent from './ShareComponent'
import {BsFillCloudSunFill} from 'react-icons/bs'
import { AuthContext } from '../context/authContext'
const Feed = ({ username }) => {
  const user = useContext(AuthContext)
  // function to set bg colors based on the time of the day

  const bgColors = () => {
    if (new Date().getHours() < 12) {
      return 'bg-blue-500'
    } else if (new Date().getHours() < 18) {
      return 'bg-gradient-to-tr from-orange-300 to-yellow-500'
    } else {
      return 'bg-gray-500'
    }
  }
  return (
    // feed
    <div className=' w-[100%] lg:w-[80%] bg-gray-100 p-3 mx-auto'>
      {/* <div className={
        bgColors() + " w-fit p-4 text-white mx-auto h-20 rounded-t-xl flex flex-col justify-center items-center"
      }>

        {
          new Date().getHours() < 12 ? <h1 className="text-4xl w-full justify-center items-center flex space-x-5 font-bold  mb-5 px-5"> {user?.username} <BsFillCloudSunFill className="text-blue-500 text-4xl" /> </h1> : new Date().getHours() < 18 ? <h1 className="text-2xl font-bold ">Good Afternoon {user?.username} </h1> : <h1 className="text-2xl font-bold ">Good Evening</h1>
        }
      </div> */}
      <div className="sticky top-20 z-10">
        <ShareComponent />
      </div>
      <div className="flex flex-col mt-5 mb-10 rounded-t-xl h-[] overflow-y-scroll mx-auto ">
        {/* feed wrapper */}
        <div>
          <FeedBox username={username} />
        </div>
      </div>
    </div>
  )
}

export default Feed