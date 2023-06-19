import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/13.png";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={AboutImg} title="Contact" btnclass="hide" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
