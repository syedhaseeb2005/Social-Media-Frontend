import React, { useState } from "react";
import "./Share.css";
import {
  Cancel,
  EmojiEmotions,
  Label,
  PermMedia,
  Room,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import {
  storage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "../../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Share = () => {
  const user = useSelector((state) => state?.user?.user?.user);
  const [desc, setdesc] = useState("");
  const [file, setFile] = useState(null);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      return toast.error("Please select a file");
    }
    const storageRef = ref(storage, `PostImages/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        // ... (rest of your existing state_changed logic)
      },
      (error) => {
        console.error("Error uploading file:", error);
        // ... (rest of your existing error handling logic)
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const newPost = {
            userId: user._id,
            desc: desc,
            img: downloadURL,
          };

          const res = await axios.post(
            "http://localhost:7000/api/post/",
            newPost
          );
          console.log(res.data);
          toast.success("Post added successfully");
          setTimeout(() => window.location.reload(), 1500);
        } catch (error) {
          console.error("Error adding student:", error);
        }
      }
    );
  };

  return (
    <>
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img
              src={user?.profilePicture}
              className="shareProfileImg"
              alt="pp"
            />
            <input
              type="text"
              placeholder={`What's in your mind ${user.username}?`}
              className="shareInput"
              onChange={(e) => setdesc(e.target.value)}
            />
          </div>
          <hr />
          {file && (
            <div className="shareImgContainer">
              <img
                src={URL.createObjectURL(file)}
                alt="img"
                className="shareImg"
              />
              <Cancel
                className="shareCancelImg"
                onClick={() => setFile(null)}
              />
            </div>
          )}
          <form className="shareBottom" onSubmit={HandleSubmit}>
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <PermMedia htmlColor="tomato" className="ShareIcon" />
                <span className="shareOptionText">Photo or Video</span>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  accept=".png,.jpeg,.jpg"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
              <div className="shareOption">
                <Label htmlColor="blue" className="ShareIcon" />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <Room htmlColor="green" className="ShareIcon" />
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions htmlColor="goldenrod" className="ShareIcon" />
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>
            <button
              type="submit"
              style={{ cursor: desc === "" ? "not-allowed" : "pointer" }}
              disabled={desc === ""}
              className="shareBtn"
            >
              Share
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Share;
