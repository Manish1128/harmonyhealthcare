import React, { useState } from "react";
import { Link } from "react-router-dom";


const SignUpDone = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const getUserData = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    const res = await fetch(
      // "https://harmony-healthcare-c73a8-default-rtdb.firebaseio.com/harmonylogindatabase.json",
      "https://harmony-healthcare-3694e-default-rtdb.firebaseio.com/harmonylogindatabase.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    if (res) {
      setUser({
        email: "",
        password: "",
      });
      // alert("You have been Logged In!!");

      if (email && password) {
        alert("You have been Registered Successfully !!");
      } else 
        alert("Please enter the Credentials properly !!");
    
    }
  };

  return (
    <>
      <div className="wrapper">
        <span className="close">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div className="form-box-login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="email"
                name="email"
                required
                value={user.email}
                onChange={getUserData}
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                name="password"
                required
                value={user.password}
                onChange={getUserData}
              />
              <label>Password</label>
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn" onClick={postData}>
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?
                <Link to="/signup/register" className="register-link">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpDone;
