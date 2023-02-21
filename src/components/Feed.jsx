import React from 'react'
import FeedBox from './FeedBox'
import ShareComponent from './ShareComponent'

const Feed = ({username}) => {
  return (
    // feed
    <div className=' w-[100%]  lg:w-[80%] bg-gray-100 p-5 mx-auto'>
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