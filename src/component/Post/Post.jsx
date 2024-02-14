import React, { useEffect, useState } from "react";
import "./Post.css";
import { FavoriteBorder, MoreVert } from "@mui/icons-material";
import axios from "axios";
import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const users = useSelector((state) => state?.user?.user?.user);
  const [likes, setlikes] = useState(post.likes.length);
  const [user, setUser] = useState({});
  const [isLiked, setIsLiked] = useState(post.likes.includes(users._id));
  
  const likeHandler = async () => {
    try {
      if (isLiked) {
        await axios.put(`http://localhost:7000/api/post/${post?._id}/dislike`, {
          userId: users,
        });
      } else {
        await axios.put(`http://localhost:7000/api/post/${post?._id}/like`, {
          userId: users,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setlikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:7000/api/user?userId=${post?.userId}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [post?.userId]);
  // console.log(user);

  return (
    <div className="Post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopleft">
            <Link to={`/profile/${user?.username}`} className="link">
              <img
                src={user?.profilePicture}
                className="PostProfile"
                alt="pp"
              />
            </Link>
            <span className="postUsername">{user?.username}</span>
            <span className="postDate">{moment(post.createdAt).fromNow()}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <div className="spanPostText">{post?.desc}</div>
          <img src={post?.img} className="PostImg" alt="img" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/* <ThumbUp className="LikeIcon" /> */}
            <FavoriteBorder onClick={likeHandler} className="LikeIcon" />
            <span className="postLikeCounter">{likes} people Liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="PostCommentText">9 comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
