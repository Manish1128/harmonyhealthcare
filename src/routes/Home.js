import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImg from "../assets/16.png";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Welcome To Harmony Healthcare"
        btnclass="hide"
        text="Choose your slot for appointment."
        buttonText="Book Now"
        url="/"
        // btnclass="show"
      />

      <Destination />
      <Footer />
    </>
  );
}

export default Home;
