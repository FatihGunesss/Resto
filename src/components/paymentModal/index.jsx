import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
// import { IoIosArrowDown } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { RiPaypalLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";

import Food1 from "assets/image/food1.png";
import Food2 from "assets/image/food2.png";
import Food3 from "assets/image/food3.png";
import Food4 from "assets/image/food4.png";
import Food5 from "assets/image/food5.png";
import Food6 from "assets/image/food6.png";
import Button from "components/button";

import "./style.css";
import { Back } from "assets/image/icons";

const PaymentModal = ({ setPaymentModal, paymentModal }) => {


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
    <div className="payment-modal">
      <div className={paymentModal.open ? "modal-inner show" : "modal-inner"}>
        <div className="left-side">
          
          <div className="orders-wrap">
            <p className="arrow-back" onClick={() => setPaymentModal({ open: false, data: {} })}>
              <Back />
            </p>
            <h2 className="orders-confirmation">Confirmation</h2>
            <p className="orders-number__modal">Orders #34562</p>
            <span className="orders-basket__line"></span>
            <div className="orders-basket__wrap modal-basket__wrap">
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

            <div className="orders-basket__total-wrap modal-total__wrap">
              <div className="orders-basket__discount">
                <p className="basket-total__name">Discount</p>
                <p className="total-price">$ 0</p>
              </div>
              <div className="orders-basket__discount">
                <p className="basket-total__name">Sub total</p>
                <p className="total-price"> $ 21,03</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="payment-method__info">
            <div className="modal-payment__td">
              <h2 className="modal-payment__title">Payment</h2>
              <p className="modal-payment__desc">3 payment method available</p>
            </div>
            <span className="orders-basket__line"></span>
            <h2 className="payment-basket__method-title">Payment Method</h2>
            <div className="payment-method__wrap">
              <div className="payment-method-box payment-active">
                <span className="payment-method__icon">
                  <CiCreditCard1 />
                </span>
                <span className="payment-method__completed"></span>
                <p className="payment-method">Credit Card</p>
              </div>
              <div className="payment-method-box">
                <span className="payment-method__icon">
                  <RiPaypalLine />
                </span>
                <span className="payment-method__completed"></span>
                <p className="payment-method">Paypal</p>
              </div>
              <div className="payment-method-box">
                <span className="payment-method__icon">
                  <CiWallet />
                </span>
                <span className="payment-method__completed"></span>
                <p className="payment-method">Cash</p>
              </div>
            </div>
            <form className="payment-input__wrap">
              <label>
                {"Cardholder Name"}
                <div>
                  <input type="text" placeholder="Cardholder Name..." />
                </div>
              </label>
              <label>
                {"Card Number"}
                <div>
                  <input type="number" placeholder="#### #### #### 4569" />
                </div>
              </label>
              <div className="payment-dp">
                <label>
                  {"Expiration Date"}
                  <div>
                    <input type="data" placeholder="12/2024" />
                  </div>
                </label>
                <label>
                  {"CVV"}
                  <div>
                    <input type="password" placeholder="123" />
                  </div>
                </label>
              </div>
            </form>
            <span className="orders-basket__line"></span>

            <div className="payment-order__type-wrap">
              <div className="paymmnet-order__type">
                <h5 className="payment-order-title">Order Type</h5>
                <button className="payment-order__dine">
                  <IoIosArrowUp /> Dine In
                </button>
              </div>
              <div className="paymmnet-order__type">
                <h5 className="payment-order-title">Order Type</h5>
                <button className="payment-order__dine table-no">140</button>
              </div>
            </div>

            <div className="paymnet-btn__wrap">
              <Button className="payment-btn1" title={"Cancel"}  onClick={() => setPaymentModal({ open: false, data: {} })}/>
              <Button className="payment-btn2" title={"Confirm Payment"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
