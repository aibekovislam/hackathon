import React from "react";
import { ReactComponent as CoinsAnim } from "../static/BaielVectorsImages/CoinsAnim.svg";
import "../static/baielPayment.css";

function PaymentSuccess() {
  return (
    <div id="containerSuccess">
      <div id="containerPayment">
        <div id="choosehowtopay">
          <div id="blob green"> </div>
          <h1>Your payment successfully done!</h1>
          <h4 id="textSecond">
            Your payment is encrypted and you can change how you pay anytime
          </h4>
          <h4>Secure for peace of mind</h4>
          <h4>Cancel easily online</h4>
            <button id="btnToWatch">Go to watch</button>
        </div>
      </div>
      <div id="animContainer">
        <CoinsAnim 
          style={{ position: "absolute", bottom: "0", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default PaymentSuccess;
