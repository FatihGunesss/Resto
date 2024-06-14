import React, { useState } from 'react'

import "assets/allCss/all.css";
import "assets/allCss/container.css";
import "assets/allCss/font.css";
import "./style.css";

const Nav = () => {
    const [actived, setActived] = useState(1);
  const menuData = [
    {
      id: 1,
      title: "Hot Dishes",
    },
    {
      id: 2,
      title: "Cold Dishes",
    },
    {
      id: 3,
      title: "Soup",
    },
    {
      id: 4,
      title: "Grill",
    },
    {
      id: 5,
      title: "Appetizer",
    },
    {
      id: 6,
      title: "Dessert",
    },
  ];
  return (
    <div>
        <ul className="item-menu__wrap">
        {menuData.map((item, index) => (
          <li
            onClick={() => setActived(item.id)}
            className={actived === item.id ? "item-menu active" : "item-menu"}
            key={index}
          >
            <p className=" item-title ">
              <span className="item-line"></span>
              {item.title}
            </p>
          </li>
        ))}
      </ul>
      <span className="header-line"></span>
    </div>
  )
}

export default Nav