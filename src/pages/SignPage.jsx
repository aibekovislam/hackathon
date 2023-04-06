import { TextField } from "@mui/material";
import React from "react";
import "../static/baielSignIn.css";

function SignPage() {
  return (
    <div className="SignInCard">
      <h1 className="SignInTitle">Sign In</h1>
      <div className="inputs">
        <TextField id="filled-basic" label="Email" variant="filled" />
        <TextField id="filled-basic" label="Password" variant="filled" />
      </div>
      <button className="Next">Next</button>
      <input type="checkbox" />
      <h4>Please do not send me special orders</h4>
    </div>
  );
}

export default SignPage;
