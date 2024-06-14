import { useState } from "react";
import { Nav } from "components";
import { HiOutlineHeart } from "react-icons/hi";
import { IoRestaurantOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiSecurityCameraLight } from "react-icons/pi";
import { BiLockOpenAlt } from "react-icons/bi";
import { RxInfoCircled } from "react-icons/rx";
import { BiEditAlt } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { IoOptionsOutline } from "react-icons/io5";

import Food1 from "assets/image/food1.png";
import Food2 from "assets/image/food2.png";
import Food3 from "assets/image/food3.png";
import Food4 from "assets/image/food4.png";
import Food5 from "assets/image/food5.png";
import Food6 from "assets/image/food6.png";

import "assets/allCss/all.css";
import "assets/allCss/container.css";
import "assets/allCss/font.css";
import "./style.css";
import Button from "components/button";

const Settings = () => {
  const [settingsAvtive, setSettingsActive] = useState(1);
  const settingsData = [
    {
      id: 1,
      icon: <HiOutlineHeart />,
      title: "Appereance",
      desc: "Dark and Light mode, Font size",
    },
    {
      id: 2,
      icon: <IoRestaurantOutline />,
      title: "Your Restaurant",
      desc: "Dark and Light mode, Font size",
    },
    {
      id: 3,
      icon: <CiDiscount1 />,
      title: "Products Management",
      desc: "Manage your product, pricing, etc",
    },
    {
      id: 4,
      icon: <IoIosNotificationsOutline />,
      title: "Notifications",
      desc: "Customize your notifications",
    },
    {
      id: 5,
      icon: <PiSecurityCameraLight />,
      title: "Security Camera",
      desc: "Configure Password, PIN, etc",
    },
    {
      id: 6,
      icon: <BiLockOpenAlt />,
      title: "Security",
      desc: "Configure Password, PIN, etc",
    },
    {
      id: 7,
      icon: <RxInfoCircled />,
      title: "About Us",
      desc: "Find out more about Posly",
    },
  ];

  const settingsFoodData = [
    {
      id: 1,
      img: Food1,
      title: "Spicy seasoned seafood noodles",
      price: 2.29,
      amount: "20 Bowls",
    },
    {
      id: 2,
      img: Food2,
      title: "Salted Pasta with mushroom sauce",
      price: 2.69,
      amount: "11 Bowls",
    },
    {
      id: 3,
      img: Food3,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls",
    },
    {
      id: 4,
      img: Food4,
      title: "Healthy noodle with spinach leaf",
      price: 3.29,
      amount: "22 Bowls",
    },
    {
      id: 5,
      img: Food5,
      title: "Hot spicy fried rice with omelet",
      price: 3.49,
      amount: "13 Bowls",
    },
    {
      id: 6,
      img: Food6,
      title: "Spicy instant noodle with special omelette",
      price: 3.59,
      amount: "17 Bowls",
    },
    {
      id: 7,
      img: Food1,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls",
    },
    {
      id: 8,
      img: Food2,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls",
    },
    {
      id: 9,
      img: Food3,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls",
    },
    {
      id: 10,
      img: Food4,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls",
    },
    {
      id: 11,
      img: Food5,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls",
    },
    {
      id: 12,
      img: Food6,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls",
    },
  ];

  return (
    <div className="settings-wrpper">
      <div className="settings-back__left">
        <div className="settings-wrapper__left">
          <div className="settings-info__wrapper-left ">
            {settingsData.map((item, index) => (
              <div
                onClick={() => setSettingsActive(item.id)}
                className={
                  settingsAvtive === item.id
                    ? "settings-info__left settings-info__active"
                    : "settings-info__left"
                }
                key={index}
              >
                <div className="settings-icon__left">{item.icon}</div>
                <div className="settings-info__td-left">
                  <h5 className="setting-info__title-left">{item.title}</h5>
                  <p className="setting-info__desc-left">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="settings-wrapper__right">
        <div className="settings-info__wrapper">
          <div className="settings-add__food">
            <div>
              <h3 className="settings-add__title">Products Management</h3>
            </div>
            <div>
              <button className="settings-add__catigories">
                <p><IoOptionsOutline /> </p>
                {"Manage Categories"}
              </button>
            </div>
          </div>
          <div className="settings-add__nav">
            <Nav />
          </div>

          <div className="settings-food__cards-wrapper">
            <div className="settings-add__box">
              <h4 className="settings-add__plus">
                <FiPlus />
              </h4>
              <p>Add new dish</p>
            </div>
            {settingsFoodData.map((item, index) => (
              <div className="settings-food__card" key={index}>
                <div className="settings-food__img-wrapper">
                  <img className="settings-food__image" src={item.img} alt="" />
                </div>
                <div className="setting-food__cards-info">
                  <h5 className="settings-food__name">{item.title}</h5>
                  <p className="settings-food__desc">
                    $ {item.price} • {item.amount}{" "}
                  </p>
                </div>
                <div className="settings-food__edit">
                  <p className="setting-food__edit-dish">
                    <BiEditAlt /> Edit Dish
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="settings-button__wrapper">
            <Button className={"settings-btn1"} title={"Discard Changes"}/>
            <Button className={"settings-btn2"} title={"Save Changes"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
