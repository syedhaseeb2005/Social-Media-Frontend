import React from "react";
import "./Sidebar.css";
import {
  Bookmark,
  Event,
  Group,
  HelpOutline,
  Message,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Message className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarbtn">Show More</button>
        <hr className="sidebarhr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriendListItem">
            <img
              src="https://img.freepik.com/premium-vector/gamer-streamer-mascot-logo-vector-illustration_382438-609.jpg?size=626&ext=jpg&ga=GA1.1.140349720.1700509378&semt=ais"
              className="sidebarFriendImg"
              alt="pp"
            />
            <span className="sidebarFriendText">Jawad</span>
          </li>
          <li className="sidebarFriendListItem">
            <img
              src="https://img.freepik.com/premium-vector/gamer-streamer-mascot-logo-vector-illustration_382438-609.jpg?size=626&ext=jpg&ga=GA1.1.140349720.1700509378&semt=ais"
              className="sidebarFriendImg"
              alt="pp"
            />
            <span className="sidebarFriendText">Jawad</span>
          </li>
          <li className="sidebarFriendListItem">
            <img
              src="https://img.freepik.com/premium-vector/gamer-streamer-mascot-logo-vector-illustration_382438-609.jpg?size=626&ext=jpg&ga=GA1.1.140349720.1700509378&semt=ais"
              className="sidebarFriendImg"
              alt="pp"
            />
            <span className="sidebarFriendText">Jawad</span>
          </li>
          <li className="sidebarFriendListItem">
            <img
              src="https://img.freepik.com/premium-vector/gamer-streamer-mascot-logo-vector-illustration_382438-609.jpg?size=626&ext=jpg&ga=GA1.1.140349720.1700509378&semt=ais"
              className="sidebarFriendImg"
              alt="pp"
            />
            <span className="sidebarFriendText">Jawad</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
