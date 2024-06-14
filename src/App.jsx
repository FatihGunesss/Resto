import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { Sidebar, Header, Footer, Basket, ModalCheck } from "components";
import { Home, About, Dashboard, Settings } from "pages";
import { PaymentModal } from "components";

function App() {
  const location = useLocation();
  const [paymentModal, setPaymentModal] = useState({ open: false, data: {} });

  return (
    <div className="components-wrapper">
      <PaymentModal {...{ setPaymentModal, paymentModal }} />
      <ModalCheck />
      <div
        onClick={() => setPaymentModal({ open: false, data: {} })}
        className={paymentModal.open ? "overlay opened" : "overlay"}
      />
      <div className="inner-wrapper">
        <Sidebar />
        <div className="pages-wrapper">
          <div className="header-wrapper">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discount" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        {location.pathname !== "/settings" && 
          <div className="basket-wrapper">
            <Basket {...{ paymentModal, setPaymentModal }} />
          </div>
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
