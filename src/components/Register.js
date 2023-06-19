import React, { useState} from "react";
// import { Form } from "react-router-dom";
// // import "./ContactFormStyles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./Hero";
import AboutImg from "../assets/background.jpg";
import "./RegisterStyles.css";
// import Close from "@material-ui/icons/CloseSharp";
// import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";


const Register = () => {
      const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
      });
      
      let name,value;
      const getUserData = (event) => {
        name= event.target.name;
        value= event.target.value;

        setUser({...user, [name]: value });
      };

      const postData = async (e) => {
        e.preventDefault();

          const { username, email, password} = user;


        const res = await fetch(
          // "https://harmony-healthcare-c73a8-default-rtdb.firebaseio.com/harmonyregistereddatabase.json", 
          "https://harmony-healthcare-3694e-default-rtdb.firebaseio.com/harmonyregistereddatabase.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              email,
              password,
            }),
          }
        );

        if (res) {
          setUser({
        username: "",
        email: "",
        password: "",
          });
          
        } 
          

          if (username && email && password) {
            alert("You have been Registered Successfully !!");
          } else 
            alert("Please enter the Credentials properly !!");
      

      };


  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={AboutImg} title="" btnclass="hide" />

      <div className="wrapper">

        <span className="close">
          <i className="fa-solid fa-xmark"></i>
        </span>

        <div className="form-box-register">
          <h2>Register</h2>

          <form method="POST" >
            <div className="input-box">
              <input name="username" type="text" required value={user.username} onChange={getUserData} />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required name="email" value={user.email} onChange={getUserData} />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input type="password" required name="password" value={user.password} onChange={getUserData} />
              <label>Password</label>
            </div>
            <div className="remember-forget"></div>
            <div>
              <button type="submit" className="btn" onClick={postData}>
                Register
              </button>
            </div>
            <div className="login-register">
              <p>
                Already have an account?
                <Link to="/signup" className="login-link">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
