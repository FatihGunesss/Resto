import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Home,
  Discount,
  Dashboard,
  Message,
  Notification,
  Settings,
} from "assets/image/icons";
import Logo from "assets/image/icons/Logo.svg";
import Logout from "assets/image/icons/Logout.svg";

import "assets/allCss/all.css";
import "assets/allCss/container.css";
import "assets/allCss/font.css";
import "./style.css";

const Sidebar = () => {
  const [actived, setActived] = useState(2);
  const menuData = [
    {
      id: 2,
      title: "Home",
      path: "/",
      icon: <Home />,
    },
    {
      id: 3,
      title: "Discount",
      path: "/discount",
      icon: <Discount />,
    },
    {
      id: 4,
      title: "Dashboard",
      path: "/dashboard",
      icon: <Dashboard />,
    },
    {
      id: 5,
      title: "Message",
      path: "/message",
      icon: <Message />,
    },
    {
      id: 6,
      title: "Notification",
      path: "/notification",
      icon: <Notification />,
    },
    {
      id: 7,
      title: "Settings",
      path: "/settings",
      icon: <Settings />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar-all__wrap">
        <div className="sidebar-wrap__icons">
          <img className="sidebar-logo" src={Logo} alt="Logo" />
          <ul className="nav-wrap">
            {menuData.map((item, index) => (
              <li
                onClick={() => setActived(item.id)}
                className={
                  actived === item.id ? "active-menu nav-item" : "nav-item"
                }
                key={index}
              >
                <Link to={item.path}>
                  <span className="back">{item.icon}</span>
                </Link>
              </li>
            ))}
          </ul>
          <img className="sidebar-logout" src={Logout} alt="Logout" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
