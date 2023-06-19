import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/11.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={AboutImg} title="About" btnclass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
