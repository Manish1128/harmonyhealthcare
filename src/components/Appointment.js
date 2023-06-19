import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./AppointmentStyles.css";


const Appointment = () => {
  const [user, setUser] = useState({
    Name: "",
    Contact: "",
    Date_of_Birth: "",
    Date_preferred: "",
    Time_preferred: "",
    Type: "",
    Attended: "",
    Condition: "",
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

    const { Name, Contact, Date_of_Birth, Date_preferred, Time_preferred, Type, Attended, Condition, } = user;

    const res = await fetch(
      "https://harmony-healthcare-3694e-default-rtdb.firebaseio.com/harmonyappointmentdatabase.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name,
          Contact,
          Date_of_Birth,
          Date_preferred,
          Time_preferred,
          Type,
          Attended,
          Condition,
        }),
      }
    );

    if (res) {
      setUser({
        Name: "",
        Contact: "",
        Date_of_Birth: "",
        Date_preferred: "",
        Time_preferred: "",
        Type: "",
        Attended: "",
        Condition: "",
      });
      // alert("Your Appointment has been Booked!");
      if (Name && Contact && Date_of_Birth && Date_preferred && Time_preferred && Condition) {
        alert("You booked an Appointment Successfully !!");
      } else 
        alert("Please enter the details properly !!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="form-box-login">
          <h2>Book Appointment</h2>
          <form method="POST">
            <div className="name">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <label>Name</label>
              <input
                type="name"
                name="Name"
                required
                value={user.Name}
                onChange={getUserData}
              />
            </div>

            <div className="contact">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <label>Phone</label>
              <input
                type="Contact"
                name="Contact"
                required
                value={user.Contact}
                onChange={getUserData} />
            </div>

            <div className="dob">
              <label>Date of Birth</label>
              <input
                type="Date"
                name="Date_of_Birth"
                required
                value={user.Date_of_Birth}
                onChange={getUserData} />
            </div>

            <div className="date">
              <label>Date Preferred</label>
              <input
                type="Date"
                name="Date_preferred"
                required
                value={user.Date_preferred}
                onChange={getUserData}
              />
            </div>

            <div className="time">
              <label>Time preferred</label>
              <input
                type="time"
                name="Time_preferred"
                required
                value={user.Time_preferred}
                onChange={getUserData}
              />
            </div>

            <div className="appointment-type">
              <h3>Appointment Type</h3>
              <h4>Select which appointment type(s) you required</h4>
              <label>
                <input type="checkbox"
                  value={first}
                  onChange={() => handleChange("first")}
                />
                Cardiology
              </label>
              <label>
                <input type="checkbox"
                  value={second}
                  onChange={() => handleChange("second")} />
                Orthopaedic
              </label>
              <label>
                <input type="checkbox"
                  name="Spine"
                  value={user.Type}
                  onChange={getUserData}
                />
                Spine
              </label>
              <label>
                <input type="checkbox"
                  name="Transplant Surgery"
                  value={user.Type}
                  onChange={getUserData}
                />
                Transplant Surgery
              </label>
              <label>
                <input type="checkbox"
                  name="Eye checkup"
                  value={user.Type}
                  onChange={getUserData}
                />
                Eye checkup
              </label>
              <label>
                <input type="checkbox"
                  name="Others"
                  value={user.Others}
                  onChange={getUserData}
                />
                Others
              </label>

              <div className="attend">
                <input
                  type="checkbox"
                  name="Attended"
                  required
                  value={user.Attended}
                  onChange={getUserData}
                />
                <label>Have you previously attended our facility?</label>
              </div>

              <div className="attend">
                <label>If Yes, state on which condition and when?</label>
                <input type="text"
                  name="Condition"
                  required
                  value={user.Condition}
                  onChange={getUserData}
                />
              </div>
            </div>
            <div className="book">
              <button type="submit" className="btn" onClick={postData}>
                Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );

};
export default Appointment;
