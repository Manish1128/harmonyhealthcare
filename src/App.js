import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";
import Register from "./components/Register";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="signup/register" element={<Register />} />
      </Routes>
    </div>
  );
}
