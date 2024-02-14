import { useDispatch  } from 'react-redux';
import React, { useState } from "react";
import "./Navbar.css";
import { Chat, ExitToApp, Notifications, Person, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Logout } from '../../Redux/ApiCall';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const user = useSelector((state )=> state?.user?.user?.user);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHanlder = (e) => {
    e.preventDefault()
    Logout(dispatch);
    toast.success("Logout Successfully");
    setTimeout(() => navigate('/login'), 2000);
  };


  return (
    <>
    <div className="navbarcontainer">
      <div className="navbarLeft">
        <Link className="link" to={'/'}>
        <span className="logo">My Social</span>
        </Link>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">HomePage</span>
          <span className="navbarLink">TimeLine</span>
        </div>
        <div className="navabrIcons">
          <div className="navabrIconitem">
            <Person />
            <span className="navbarIconbadge">1</span>
          </div>
          <div className="navabrIconitem">
            <Chat />
            <span className="navbarIconbadge">1</span>
          </div>
          <div className="navabrIconitem">
            <Notifications />
            <span className="navbarIconbadge">1</span>
          </div>
        </div>
        <img
          src={user.profilePicture}
          alt="myimg"
          className="navbarImg"
          onClick={() => setMenu(!menu)}
          />
        {menu && 
        <div className="menu">
          <ul className="menuList">
            <Link className="link" to={`/profile/${user.username}`}>
            <li className="menuListItem"><Person/><span>Profile</span></li>
            </Link>
            <Link className="link">
            <li onClick={logoutHanlder} className="menuListItem"><ExitToApp/><span>Logout</span></li>
            </Link>
          </ul>
          </div>}
      </div>
    </div>
    <ToastContainer/>
          </>
  );
};

export default Navbar;
