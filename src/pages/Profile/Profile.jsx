import React, { useEffect, useState } from "react";
import "./Profile.css";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import Rightbar from "../../component/Rightbar/Rightbar";
import Feed from "../../component/Feed/Feed";
import axios from "axios";
import { useParams } from "react-router";


const Profile = () => {
  const [User, setUser] = useState({});
  const username = useParams().username;
  // console.log(username);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:7000/api/user?username=${username}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  // console.log(User);
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="CoverImage"
                src={User?.coverPicture}
                alt="CoverImage"
              />
              <img
                src={User?.profilePicture}
                alt="profileImage"
                className="profileImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="ProfileInfoName">{User?.username}</h4>
              <span className="ProfileInfodesc">{User?.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar User={User} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
