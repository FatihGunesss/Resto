import { useState } from "react";
// import ReactApexChart from "react-apexcharts";
import { AiOutlineDelete } from "react-icons/ai";
// import { IoIosArrowDown } from "react-icons/io";
// import { CiCreditCard1 } from "react-icons/ci";
// import { RiPaypalLine } from "react-icons/ri";
// import { CiWallet } from "react-icons/ci";
// import { IoIosArrowUp } from "react-icons/io";
import Button from "components/button";
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

const Basket = ({ setPaymentModal }) => {
  const [actived, setActived] = useState(1);
  
  const ordersData = [
    {
      id: 1,
      title: "Spicy seasoned sea ",
      price: 2.29,
      img: Food1,
    },
    {
      id: 2,
      title: "Salted pasta with mu",
      price: 3.69,
      img: Food2,
    },
    {
      id: 3,
      title: "Spicy instant noodle",
      price: 5.29,
      img: Food3,
    },
    {
      id: 4,
      title: "Healthy noodle with",
      price: 1.29,
      img: Food4,
    },
    {
      id: 5,
      title: "Spicy seasoned sea",
      price: 1.79,
      img: Food5,
    },
    {
      id: 6,
      title: "Spicy seasoned sea",
      price: 2.3,
      img: Food6,
    },
  ];

  return (
    <div className="container">
      <div className="orders-wrap">
        <h2 className="orders-number">Orders #34562</h2>
        <div className="orders-buttons">
          <button
            onClick={() => setActived(1)}
            className={
              actived === 1 ? "orders-button orders-active" : "orders-button"
            }
          >
            Dine In
          </button>
          <button
            onClick={() => setActived(2)}
            className={
              actived === 2 ? "orders-button orders-active" : "orders-button"
            }
          >
            To Go
          </button>
          <button
            onClick={() => setActived(3)}
            className={
              actived === 3 ? "orders-button orders-active" : "orders-button"
            }
          >
            Delivery
          </button>
        </div>
        <div className="orders-desc__wrap">
          <div className="desc-left">
            <p className="orders-desc">Item</p>
          </div>
          <div className="desc-right">
            <p className="orders-desc">Qty</p>
            <p className="orders-desc">Price</p>
          </div>
        </div>

        <span className="orders-basket__line"></span>

        <div className="orders-basket__wrap">
          {ordersData.map((item, index) => (
            <div className="orders-basket__info" key={index}>
              <div className="orders-basket__top">
                <div className="ordes-basket__tdi">
                  <img className="orders-img" src={item.img} alt="Foods" />
                  <div className="orders-basket__td">
                    <h4 className="orders-basket__title">{item.title}</h4>
                    <p className="orders-basket__desc">${item.price}</p>
                  </div>
                </div>
                <div className="orders-basket__ap">
                  <p className="orders-basket__amount">2</p>
                  <p className="orders-basket__price">$ 4,58</p>
                </div>
              </div>

              <div className="orders-basket__bottom">
                <input
                  className="orders-basket__input"
                  type="text"
                  placeholder="Order Note..."
                />
                <button className="orders-basket__delete">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
        <span className="orders-basket__line"></span>

        <div className="orders-basket__total-wrap">
          <div className="orders-basket__discount">
            <p className="basket-total__name">Discount</p>
            <p className="total-price">$ 0</p>
          </div>
          <div className="orders-basket__discount">
            <p className="basket-total__name">Sub total</p>
            <p className="total-price"> $ 21,03</p>
          </div>
        </div>
        <Button
          onClick={() => setPaymentModal({ open: true, data: {  } })}
          title={"Continue to Payment"}
        />
      </div>
    </div>
  );
};

export default Basket;
