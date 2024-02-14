import { useState } from "react";
import React, { useEffect } from "react";
import "./Rightbar.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";

const Rightbar = ({ User }) => {
  console.log(User);
  const user = useSelector((state) => state?.user?.user?.user);
  const [getFriend, setgetFriend] = useState([]);
  const [follow, setFollow] = useState(user.followings.includes(User?._id));
  // console.log(user);
 
  useEffect(() => {
    const fetchFriend = async () => {
      const res = await axios.get(
        `http://localhost:7000/api/user/friends/${user?._id}`
      );
      // console.log(res.data);
      setgetFriend(res.data);
    };
    fetchFriend();
  }, [user?._id]);
  // console.log(getFriend);

  const handleFollow = async () => {
    try {
      if(follow){
        await axios.put(`http://localhost:7000/api/user/${User._id}/unfollow`,{
          userId: user._id,
        })
      }else{
        await axios.put(`http://localhost:7000/api/user/${User._id}/follow`,{
          userId: user._id,
        })
      }
    } catch (error) {
      console.log(error);
    }
    setFollow(!follow);
  };

  const HomeRightBar = () => (
    <>
      <div className="birthdayContainer">
        <img
          src="https://img.freepik.com/free-vector/blue-gift-box_23-2147502754.jpg?size=626&ext=jpg&ga=GA1.1.140349720.1700509378&semt=ais"
          className="birthdayImg"
          alt="birthdayImg"
        />
        <span className="birthdayText">
          <b>Syed Haseeb</b> and <b>3 others Friends</b> have a Birthday today
        </span>
      </div>
      <img
        className="rightBarAdimg"
        src="https://t3.ftcdn.net/jpg/07/23/79/18/240_F_723791848_kRZQUpB4peefshM2WyvYA87yTe4P7z0S.jpg"
        alt=""
      />
      <h4 className="rightBarTitle">Online Friend</h4>
      <ul className="rightBarFriendsList">
        <li className="rightBarFriend">
          <div className="rightbarImgContainer">
            <img
              className="rightbarProfileImg"
              src="https://img.freepik.com/premium-vector/gamer-streamer-mascot-logo-vector-illustration_382438-609.jpg?size=626&ext=jpg&ga=GA1.1.140349720.1700509378&semt=ais"
              alt=""
            />
            <span className="rightbarOutline"></span>
          </div>
          <span className="rightbarUsername">Syed Haseeb</span>
        </li>
      </ul>
    </>
  );
  const ProfileRightBar = () => {
    return (
      <>
        {User?.username !== user?.username && (
          <button className="followbtn" onClick={handleFollow}>
            {follow ? "Unfollow" : "Follow"} 
            {follow ? <Remove /> : <Add/>}
          </button>
        )}
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">{user?.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">{user?.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Realtionship:</span>
            <span className="rightBarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          {getFriend.map((friend) => (
            <Link className="link" to={`/profile/${friend.username}`}>
              <div key={friend._id} className="rightBarFollowing">
                <img
                  src={friend?.profilePicture}
                  alt="rightbarFollowingImg"
                  className="rightbarFollowingImg"
                />
                <span className="rightBarFollowingName">
                  {friend?.username}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {User ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};
export default Rightbar;
