import { useLocation } from "react-router-dom";

import "assets/allCss/all.css";
import "assets/allCss/container.css";
import "assets/allCss/font.css";
import "./style.css";

const Header = (className) => {
  const location = useLocation();
  return (
    <div className="container">
      <div className={className + " header"}>
        <div className="header-tds">
          <h1 className="header-title">Fatih Resto</h1>
          <p className="header-desc">Wednesday, 29 May 2024</p>
        </div>

        {location.pathname !== "/settings" &&
          <div className="header-search__info">
          <div className="search-icon"></div>
          <input
            className="header-search"
            type="search"
            placeholder="Search for food, coffe, etc.."
          />
        </div>
        }
      </div>
    </div>
  );
};

export default Header;
