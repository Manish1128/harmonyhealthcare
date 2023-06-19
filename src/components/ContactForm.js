import "./ContactFormStyles.css";
import { useState } from "react";

function ContactForm() {

  const [user, setUser] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
  });

  

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);

  const handleChange = (data) => {
    if (data == "first") {
      if (first == true) {
        console.log(data, "our value")
      }
      setFirst(!first)
    }
    if (data == "second") {
      if (second == true) {
        console.log(data, "our value")
      }
      setSecond(!second)
    }
  }
 
  

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = user;

    const res = await fetch(
      "https://harmony-healthcare-3694e-default-rtdb.firebaseio.com/harmonycontactformdatabase.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message
        }),
      }
    );

    if (res) {
      setUser({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // alert("Your Appointment has been Booked!");
      if (name && email && subject && message) {
        alert("You filled the contact form Successfully !!");
      } else 
        alert("Please enter the contact form properly !!");
    }
  };

  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form method="POST">
        <input placeholder="Name" name="name" value={user.name} onChange={getUserData} />
        <input placeholder="Email" name="email" value={user.email} onChange={getUserData} />
        <input placeholder="Subject" name="subject" value={user.subject} onChange={getUserData} />
        <textarea placeholder="Message" rows="4" name="message" value={user.message} onChange={getUserData}></textarea>
        <button type="submit"  onClick={postData}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
