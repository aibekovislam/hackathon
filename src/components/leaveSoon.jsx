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
    </div>
  );
}

export default LeaveSoon;
