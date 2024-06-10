import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Sidebar, Header, Footer, Basket } from "components";
import { Home, About, Dashboard } from "pages";
import { PaymentModal } from "components";

function App() {
  const [paymentModal, setPaymentModal] = useState({ open: false, data: {} });
  return (
    <div className="components-wrapper">
      <PaymentModal {...{ setPaymentModal, paymentModal }} />
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
          </Routes>
        </div>
        <div className="basket-wrapper">
          <Basket {...{ paymentModal, setPaymentModal }} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
