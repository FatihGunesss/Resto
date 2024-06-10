import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { LuBookmarkMinus } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { CgOptions } from "react-icons/cg";

import Client1 from "assets/image/client1.png";
import Client2 from "assets/image/client2.png";
import Client3 from "assets/image/client3.png";
import Client4 from "assets/image/client4.png";
import Client5 from "assets/image/client5.png";

import "assets/allCss/all.css";
import "assets/allCss/container.css";
import "assets/allCss/font.css";
import "./style.css";

const Dashboard = () => {
  const clientsData = [
    {
      id: 1,
      img: Client1,
      name: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles",
      total: 125,
      status: "Completed",
    },
    {
      id: 2,
      img: Client2,
      name: "Reiner Braunnr",
      menu: "Salted Pasta with mushroom sauce",
      total: 145,
      status: "Preparing",
    },
    {
      id: 3,
      img: Client3,
      name: "Levi Ackerman",
      menu: "Beef dumpling in hot and sour soup",
      total: 105,
      status: "Pending",
    },
    {
      id: 4,
      img: Client4,
      name: "Historia Reiss",
      menu: "Hot spicy fried rice with omelet",
      total: 45,
      status: "Completed",
    },
    {
      id: 5,
      img: Client5,
      name: "Hanji Zoe",
      menu: "Hot spicy fried rice with omelet",
      total: 245,
      status: "Pending",
    },
    {
      id: 6,
      img: Client2,
      name: "Armin Arlert",
      menu: "Hot spicy fried rice with omelet",
      total: 435,
      status: "Completed",
    },
    {
      id: 7,
      img: Client4,
      name: "Hanji Zoe",
      menu: "Hot spicy fried rice with omelet",
      total: 365,
      status: "Completed",
    },
    {
      id: 8,
      img: Client5,
      name: "Osman Kaya",
      menu: "Hot spicy fried rice with omelet",
      total: 129,
      status: "Preparing",
    },
    {
      id: 9,
      img: Client2,
      name: "Yamaç Koçovalı",
      menu: "Hot spicy fried rice with omelet",
      total: 65,
      status: "Preparing",
    },
    {
      id: 10,
      img: Client1,
      name: "Fatih Güneş",
      menu: "Hot spicy fried rice with omelet",
      total: 435,
      status: "Completed",
    },
  ];
  return (
    <div className="dashboard">
    <span className="header-line"></span>
    <div className="exchange-all__wrap">
      <div className="exchange-rate__cards">
        <div className="exchange-rate__card">
          <div className="exchange-rate__ip">
            <p className="dollar-icon">
              <HiOutlineCurrencyDollar />
            </p>
            <p className="dollar-price__percents">+32.40%</p>
            <span className="arrow-top__icon">
              <GoArrowUp />
            </span>
          </div>
          <h1 className="dollar-price">$ 10.243,00</h1>
          <p className="dollar-total">Total Revenue</p>
        </div>
      </div>
      <div className="exchange-rate__cards">
        <div className="exchange-rate__card">
          <div className="exchange-rate__ip">
            <p className="dollar-icon bookmark-icon">
              <LuBookmarkMinus />
            </p>
            <p className="dollar-price__percents percent2">-12.40%</p>
            <span className="arrow-top__icon arrow-icon2">
              <GoArrowDown />
            </span>
          </div>
          <h1 className="dollar-price">23,456</h1>
          <p className="dollar-total"> Dish Ordered</p>
        </div>
      </div>
      <div className="exchange-rate__cards">
        <div className="exchange-rate__card">
          <div className="exchange-rate__ip">
            <p className="dollar-icon user-icon">
              <LuUsers />
            </p>
            <p className="dollar-price__percents">+2.40%</p>
            <span className="arrow-top__icon">
              <GoArrowUp />
            </span>
          </div>
          <h1 className="dollar-price">1,234</h1>
          <p className="dollar-total">Total Customer</p>
        </div>
      </div>
    </div>

    <div className="report-wrap">
      <div className="report-tif">
        <h2 className="report-title">Order Report</h2>
        <div className="report-if">
          <span className="filter-icon">
            <CgOptions />
          </span>
          <p className="report-filter">Filter Ordert</p>
        </div>
      </div>

      <table className="table-scroll">
        <thead>
          <tr>
            <th className="report-table__title">Customer</th>
            <th className="report-table__title">Menu</th>
            <th className="report-table__title">Total Payment</th>
            <th className="report-table__title">Status</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {clientsData.map((item, index) => (
            <tr className="table-content" key={index}>
              <td className="report-table__content client-info">
                <img className="table-ava" src={item.img} alt="Client1" />
                <p className="client-name">{item.name}</p>
              </td>
              <td>
                <p className="report-table__content client-menu">
                  {item.menu}
                </p>
              </td>
              <td className="report-table__content">${item.total}</td>
              <td className="report-table__content">
                <p
                  className={
                    item.status === "Completed"
                      ? "table-status status-completed"
                      : item.status === "Preparing"
                      ? "table-status status-preparing"
                      : "table-status status-pending"
                  }
                >
                  {item.status}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Dashboard