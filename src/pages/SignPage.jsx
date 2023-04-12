import { TextField } from "@mui/material";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase";
import "../static/baielSignIn.css";
import { mainEmail } from "./HomePage";

function SignPage() {
  const [ isLogin, setIsLogin ] = useState();
  const { register, logIn, user }=  useAuthContext();
  const [myEmail, setEmail] = useState();
  const [myPassword, setPassword] = useState();

  console.log(user)

  const navigate = useNavigate();

  return (
    <>
      <div className="pc">
        <div className="card">
          <div className="SignInCard">
            <div className="myinputs">
              <h1 className="SignInTitle">{ isLogin ? "Sign In" : "Sign up" }</h1>
              <TextField
                id="filled-basic"
                className="whiteInput"
                label="Email"
                sx={{ label: { color: "white" }, color: "red!important" }}
                variant="filled"
                value={mainEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                sx={{ label: { color: "white" } }}
                id="filled-basic"
                label="Password"
                variant="filled"
                value={myPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
              { isLogin ? 
                <>
                  <div className="ThirdInput">
                    {/* <input type="checkbox" /> */}
                    {/* <h4>Please do not send me special orders</h4> */}
                    <Link onClick={() => setIsLogin(!isLogin)} href="#" variant="body2">
                      { isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign in" }
                    </Link>
                </div>
                <button className="Next" onClick={() => {
                  signInWithEmailAndPassword(auth, myEmail, myPassword);
                  return user ? navigate('/main') : null
                }}>Sign In</button>
                </>
              : 
              <>
                <div className="ThirdInput">
                  {/* <input type="checkbox" /> */}
                  {/* <h4>Please do not send me special orders</h4> */}
                  <Link onClick={() => setIsLogin(!isLogin)} href="#" variant="body2">
                    { isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign in" }
                  </Link>
                </div>
                <button className="Next" onClick={() => {
                  createUserWithEmailAndPassword(auth, myEmail, myPassword);
                  return navigate('/main') 
                }}>Sign Up</button>
              </>
              }
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
