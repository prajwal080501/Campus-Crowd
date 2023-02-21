import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Post from './Post'

const FeedBox = ({username}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username? await axios.get("http://localhost:8000/api/posts/profile/" + username) : await axios.get("http://localhost:8000/api/posts/timeline/all/63ea306ab9bbd5fb7fca73e3");
      console.log(res);
      setPosts(res.data);
    }
    fetchPosts();
  }, [])
  console.log(posts);
  return (
    <div className="flex flex-col space-y-4 w-full lg:w-[80%] mb-10 sticky top-10 mx-auto mt-10">
      {/* feed wrapper */}
      {
        posts.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </div>
  )
}

export default FeedBox