import { IoClose } from "react-icons/io5";

import "assets/allCss/all.css";
import "assets/allCss/container.css";
import "assets/allCss/font.css";
import "./style.css";

const ModalCheck = ({ checkModalniOch, setCheckModalniOch }) => {
  return (
    <div className="modal-check">
      <div
        onClick={() => setCheckModalniOch({ open: false, data: {} })}
        className={
          checkModalniOch?.open === true
            ? "check-overlay opened-check"
            : "check-overlay"
        }
      />
      <div
        className={
          checkModalniOch?.open === true
            ? " show-check modal-check__wrapper "
            : "modal-check__wrapper"
        }
      >
        <div className="check-close__wrapper">
          <p
            className="check-close"
            onClick={() => setCheckModalniOch({ open: false, data: {} })}
          >
            <IoClose />
          </p>
        </div>
        <div className="modal-check__info-wrapper">
          <h3 className="modal-check__resto-name">Fatih Resto</h3>
          <div className="modal-check__table-and__data">
            <p className="modal-check__data">11.06.2024 - 17:35</p>
            <p className="modal-check__table">Table No: 5</p>
          </div>
          <div className="modal-chesck__info">
            <div className="modal-check__td">
              <h4 className="modal-check__products">Products</h4>
              <h4 className="modal-check__piece">Piece</h4>
              <h4 className="modal-check__price">Total</h4>
            </div>
            <div className="modal-check__line"></div>

            <div className="modal-check__orders-wrapper">
              <div className="modal-check__food-info">
                <h5>Kebap</h5>
                <p>5 Piece</p>
                <p>$600</p>
              </div>
              <div className="modal-check__food-info">
                <h5>Çorba</h5>
                <p>3 Piece</p>
                <p>$200</p>
              </div>
              <div className="modal-check__food-info">
                <h5>Tavuk Durum</h5>
                <p>8 Piece</p>
                <p>$550</p>
              </div>
              <div className="modal-check__food-info">
                <h5>Baklava</h5>
                <p>4 Piece</p>
                <p>$835</p>
              </div>
              <div className="modal-check__food-info">
                <h5>Çay</h5>
                <p>10 Piece</p>
                <p>$350</p>
              </div>
              <div className="modal-check__line"></div>
            </div>
            <div className="model-check__sale-wrapper">
              <div className="model-check__sale-left">
                <p>Services:</p>
                <p>Sale:</p>
                <p>Net Total:</p>
              </div>
              <div className="model-check__sale-right">
                <p>$10</p>
                <p>$20</p>
                <p>$200</p>
              </div>
            </div>

            <div className="model-check__pey__wrapper">
              <h2>Total To Be Paid: $200</h2>
              <p>We Thank You</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default ModalCheck;
