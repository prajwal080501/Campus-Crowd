import React from 'react'
import FeedBox from './FeedBox'
import ShareComponent from './ShareComponent'

const Feed = () => {
  return (
    // feed
    <div className="flex flex-col h-[100vh] bg-gray-100 overflow-y-auto mx-auto w-[100%]  lg:w-[80%]">
      {/* feed wrapper */}
      <div>
        <ShareComponent />
        <FeedBox />
      </div>
    </div>
  )
}

export default Feed