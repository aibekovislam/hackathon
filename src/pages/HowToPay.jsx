import React from "react";
import "../static/baielPayment.css";
import { ReactComponent as Locker } from "../static/BaielVectorsImages/Locker.svg";
import { ReactComponent as Visa } from "../static/BaielVectorsImages/Visa.svg";
import { ReactComponent as Mastercard } from "../static/BaielVectorsImages/Mastercard.svg";

function HowToPay() {
  return (
    <>
      <div className="containerPayment">
        <div className="choosehowtopay">
          <div className="blob grey">
            <Locker style={{ margin: "5px" }} />
          </div>
          <h1>Choose how to pay</h1>
          <h4 className="textSecond">
            Your payment is encrypted and you can change how you pay anytime
          </h4>
          <h4>Secure for peace of mind</h4>
          <h4>Cancel easily online</h4>
        </div>
        <div id="creditcard">
          <span>Credit or debit card</span>
          <span>
            <Visa />
          </span>
          <span>
            <Mastercard />
          </span>
        </div>
      </div>
    </>
  );
}

export default HowToPay;
