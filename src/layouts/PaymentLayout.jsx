import React from "react";
import { Outlet } from "react-router-dom";
import NavbarDark from "../components/NavbarDark";

function PaymentLayout() {
  return (
    <>
      <div className="pc">
        <NavbarDark />
        <Outlet />
      </div>
      <div className="mobile">
        <NavbarDark />
        <Outlet />
      </div>
    </>
  );
}

export default PaymentLayout;
