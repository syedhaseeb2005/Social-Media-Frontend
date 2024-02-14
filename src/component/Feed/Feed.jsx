import React, { useEffect, useState } from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import axios from "axios";
import { useSelector } from "react-redux";

const Feed = ({ username }) => {
  const [post, setPost] = useState([]);
  const user = useSelector((state) => state?.user?.user?.user);
  useEffect(() => {
    const getPost = async () => {
      const res = username
        ? await axios.get(`http://localhost:7000/api/post/profile/${username}`)
        : await axios.get(
            `http://localhost:7000/api/post/timeline/${user?._id}`
          );
      setPost(
        res.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
      );
    };
    getPost();
  }, [username, user?._id]);
  // console.log(post);

  return (
    <div className="feed">
      <div className="feedWrapper">
         {(!username || username === user?.username) && <Share />}
        {post.map((posts) => (
          <Post key={posts._id} post={posts} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
