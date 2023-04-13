import React from "react";
import "../static/leaveSoon.css";

function LeaveSoon() {
  return (
    <div>
      <div class="pc">
        <img src={require("../static/bc-leave.png")} alt="" class="bc" />
      </div>
      <div class="mobile">
        <img src={require("../static/bc-leave.png")} class="bg_mobile" />
      </div>
      <div class="frame47">
        <div class="signin">
          <div class="frame46">
            <div class="frame352">
              <div class="frame18">
                <p class="LeavingSoSoon">Leaving So Soon?</p>
              </div>
              <p class="des">
                Just so you know, you don’t always need to sign out of
                Cinemawave. It’s only necessary if you’re on a shared or public
                computer.You’ll be redirected to Cinemawave.com in 30 seconds.
              </p>
            </div>
          </div>
          <div class="frame353">
            <button class="button">
              <div class="frame20">
                <p class="GoNow">Go now</p>
              </div>
            </button>
            <div class="frame305">
              <div class="frame303">
                <input type="checkbox" class="checkbox" />
                <p class="TFG">Please do not send me special offers</p>
              </div>
              <div class="frame304"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveSoon;
