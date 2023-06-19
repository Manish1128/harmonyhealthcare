import Mountain1 from "../assets/4.png";
import Mountain2 from "../assets/6.png";
import Mountain3 from "../assets/7.png";
import Mountain4 from "../assets/10.png";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Health is our first priority</h1>

      <DestinationData
        className="first-des"
        heading="About Us"
        text="Welcome to Harmony Healthcare! At Harmony Healthcare, we believe that true well-being is achieved when mind, body, and spirit are in harmony. We are dedicated to providing compassionate and comprehensive healthcare services that prioritize your overall wellness. With a team of highly skilled and experienced healthcare professionals, we offer a wide range of services to address your unique healthcare needs. From preventive care and routine check-ups to specialized treatments and therapies, we strive to deliver exceptional care at every stage of your life."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        text="Our approach is centered around personalized medicine, recognizing that each individual is unique and requires personalized attention. We take the time to listen to your concerns, understand your medical history, and collaborate with you to develop a customized treatment plan that meets your specific goals and preferences.

        At Harmony Healthcare, we prioritize patient education and empowerment. We believe that well-informed individuals make better decisions about their health. Through our website, you will find a wealth of reliable and up-to-date information on various health topics, empowering you to take an active role in your healthcare journey."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
