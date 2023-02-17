import React from 'react'
import { Posts } from '../dummydata'
import Post from './Post'

const FeedBox = () => {
  return (
    <div className="flex flex-col space-y-4 w-full lg:w-[80%] mx-auto mt-10">
      {/* feed wrapper */}
      {
        Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </div>
  )
}

export default FeedBox