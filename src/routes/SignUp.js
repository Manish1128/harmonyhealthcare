import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/background.jpg";
import Footer from "../components/Footer";
import SignUpDone from "../components/SignUpDone";
import { Routes, Route } from "react-router-dom";
import Register from "../components/Register";

function SignUp() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={AboutImg} title="About" btnclass="hide" />
      {/* <Router> */}
      <Routes>
        <Route path="/signup" element={<SignUpDone />}></Route>
        <Route path="/signup/register" element={<Register />}></Route>
      </Routes>
      {/* </Router> */}
      <SignUpDone />

      <Footer />
    </>
  );
}

export default SignUp;
