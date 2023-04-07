import { TextField } from "@mui/material";
import React from "react";
import "../static/baielSignIn.css";

function SignPage() {
  return (
    <div className="card">
      <div className="SignInCard">
        <div className="inputs">
          <h1 className="SignInTitle">Sign In</h1>
          <TextField id="filled-basic" label="Email" variant="filled" />
          <TextField
            id="filled-basic"
            label="Password"
            variant="filled"
          />
          <button className="Next">Next</button>
          <div className="ThirdInput">
            <input type="checkbox" />
            <h4>Please do not send me special orders</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignPage;
