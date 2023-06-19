import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/3.png";
import Footer from "../components/Footer";
import Appointment from "../components/Appointment";

function Services() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={AboutImg} title="Services" btnclass="hide" />
      <Appointment />
      <Footer />
    </>
  );
}

export default Services;
