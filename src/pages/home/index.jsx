import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
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

const Home = () => {
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
  const foodData = [
    {
      id: 1,
      img: Food1,
      title: "Spicy seasoned seafood noodles",
      price: 2.29,
      amount: "20 Bowls available"
    },
    {
      id: 2,
      img: Food2,
      title: "Salted Pasta with mushroom sauce",
      price: 2.69,
      amount: "11 Bowls available"
    },
    {
      id: 3,
      img: Food3,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls available"
    },
    {
      id: 4,
      img: Food4,
      title: "Healthy noodle with spinach leaf",
      price: 3.29,
      amount: "22 Bowls available"
    },
    {
      id: 5,
      img: Food5,
      title: "Hot spicy fried rice with omelet",
      price: 3.49,
      amount: "13 Bowls available"
    },
    {
      id: 6,
      img: Food6,
      title: "Spicy instant noodle with special omelette",
      price: 3.59,
      amount: "17 Bowls available"
    },
    {
      id: 7,
      img: Food1,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls available"
    },
    {
      id: 8,
      img: Food2,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls available"
    },
    {
      id: 9,
      img: Food3,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls available"
    },
    {
      id: 10,
      img: Food4,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls available"
    },
    {
      id: 11,
      img: Food5,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls available"
    },
    {
      id: 12,
      img: Food6,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      amount: "16 Bowls available"
    },
  ];
  return (
    <div className="home-wrapper">
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
      <div className="container">
        <div className="food-wrap">
          <div className="food-cards__td">
            <h2 className="food-cards__title">Choose Dishes</h2>
            <button className="food-cards__btn">
              <IoIosArrowUp /> Dine In
            </button>
          </div>
          <div className="food-cards__wrap">
            {foodData.map((item, index) => (
              <div className="food-card__wrap" key={index}>
                <div className="card-img-wrap">
                  <img
                    className="food-card__img rotating"
                    src={item.img}
                    alt="Food"
                  />
                </div>
                <div className="food-card">
                  <h3 className="food-name">{item.title}</h3>
                  <p className="food-price">$ {item.price}</p>
                  <p className="food-bowls">{item.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
