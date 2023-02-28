import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext';
import Post from './Post'

const FeedBox = ({username}) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username? await axios.get("/api/posts/profile/" + username) : await axios.get("/api/posts/timeline/all/"+ user._id);
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }
        ));
    }
    fetchPosts();
  }, [username, user._id])
  console.log(posts);
  return (
    <div className="flex flex-col space-y-4 w-[100%] lg:w-[80%] mb-10 sticky top-10 mx-auto mt-10">
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