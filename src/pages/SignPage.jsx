import { TextField } from "@mui/material";
import React from "react";
import "../static/baielSignIn.css";

function SignPage() {
  return (
    <>
      <div className="pc">
        <div className="card">
          <div className="SignInCard">
            <div className="myinputs">
              <h1 className="SignInTitle">Sign In</h1>
              <TextField
                id="filled-basic"
                className="whiteInput"
                label="Email"
                sx={{ label: { color: "white" }, color: "red!important" }}
                variant="filled"
              />
              <TextField
                sx={{ label: { color: "white" } }}
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
      </div>
      <div className="mobile">
        <h1>sdfhgs </h1>
      </div>
    </>
  );
}

export default SignPage;
