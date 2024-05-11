import React, { useState } from "react";
import headerimg from "./image.png";
import "./Home.css";
import "./Book.css";

function TableBookingForm() {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    
    name: "",
    email: "",
    phone: "",
    date: today,
    time: "10:00",
    number_of_guests: "",
    occasion: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedDate = new Date(formData.date);
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0); // Set hours to 00:00:00 for comparison
    if (selectedDate < todayDate) {
      setPopupMessage("Select a valid date and time.");
      setShowPopup(true);
      return;
    }

    // Check if the selected time is between 10 am and 10 pm
    const selectedTime = parseInt(formData.time.split(":")[0]);
    if (selectedTime < 10 || selectedTime >= 22) {
      setPopupMessage("Select a valid date and time.");
      setShowPopup(true);
      return;
    }

    // If everything is valid, show success message
    setPopupMessage(
      "Table booked! You will receive a confirmation email soon."
    );
    setShowPopup(true);
  };

  return (
    <>
      <div className="Home-layout">
        <div className="Home">
          <div className="Home-content">
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>
              Where every bite is a burst of freshness! Indulge in our vibrant
              menu crafted with locally sourced ingredients, showcasing the
              essence of seasonal flavours.
            </p>
          </div>
          <div className="Home-image">
            <img src={headerimg} alt="" />
          </div>
        </div>
      </div>

      <form className="table-booking-form" onSubmit={handleSubmit}>
        <div className="Form-header">
          <div className="Form-title">
            <h3>RESERVE A TABLE!</h3>
          </div>
          <div className="Form-occasion">
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              required
            >
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          No of Guests:
          <input
            type="number"
            name="number_of_guests"
            min={2}
            max={12}
            value={formData.number_of_guests}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Book Table!</button>
      </form>

      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </>
  );
}

export default TableBookingForm;
