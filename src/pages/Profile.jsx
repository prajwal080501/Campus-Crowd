import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import Feed from "../components/Feed";
import { useParams } from "react-router";
const Profile = () => {
  const [user, setUser] = useState({})
  const username = useParams().username;
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8000/api/users?username=${username}`);
      console.log(res);
      setUser(res.data);
    }
    fetchUser();
  }, [username])
  return (
    <div className="flex flex-col lg:flex-row">
      <Feed username="prajwalladkat" />
      {/* Profile Info */}
      <div className="flex lg:sticky overflow-y-scroll lg:top-20 h-screen  flex-col items-center bg-white text-black lg:w-[60%] py-4 space-y-0 lg:space-y-3">
        <div className="h-48 mb-5 w-48 mx-auto rounded-full border-4 border-fuchsia-500 overflow-hidden drop-shadow-lg">
          <img src={user.profilePicture} alt="Profile" className="h-48 w-48 object-contain" />
        </div>
        <h1 className="text-3xl mt-5 font-bold"><span className="text-gray-400">@</span>{user.username}</h1>
        {/* degree and college name */}
        <div className="flex flex-col justify-center lg:flex-row items-center bg-white p-3 space-x-2">
          <span className="text-lg text-gray-400 font-medium">{user.degree}</span>
          <span className="text-lg font-medium">from</span>
          <span className="text-lg text-blue-500 font-bold">{user.collegeName}</span>
          {/* passing year */}
          <span className="text-lg text-gray-400 font-medium">({user.passingYear})</span>
        </div>
        <div className="mt-4 flex items-center space-x-4 e-full justify-between">
          <span className="text-lg text-gray-400 font-medium">0 followers</span>
          <button className="bg-blue-500 hover:bg-blue-600 hover:scale-110 duration-150 ease-linear active:scale-95 shadow-md active:shadow-sm text-white font-semibold py-2 px-4 rounded">
            Follow
          </button>
        </div>
        {/* social handles */}
        <div className="flex items-center space-x-4 bg-white p-3">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <AiFillGithub className="text-3xl text-black/50 hover:scale-110 duration-200 ease-linear" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <AiOutlineInstagram className="text-3xl text-black/50 hover:scale-110 duration-200 ease-linear" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <AiOutlineLinkedin className="text-3xl text-black/50 hover:scale-110 duration-200 ease-linear" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <AiOutlineTwitter className="text-3xl text-black/50 hover:scale-110 duration-200 ease-linear" />
          </a>
        </div>
        {/* bio box */}
        <div className="bg-gray-200 text-black ring-2 ring-blue-500 drop-shadow-lg w-[90%] lg:w-[90%] p-4 rounded-lg text-center">
          <p className="text-lg font-medium">
            {user.desc}
          </p>
        </div>
        {/* Hobbies and Skills */}
        <div>
          <p className="text-2xl text-center font-bold mt-5">Skills</p>
          <div className="mt-6 flex flex-wrap justify-center">

            {
              user.skills?.map((skill) => (
                <span className="skill">{skill}</span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
