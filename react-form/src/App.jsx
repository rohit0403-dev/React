import React, { useState } from "react";
import "./App.css";
let initState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};
export default function App() {
  const [field, setField] = useState(initState);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setField({
      ...field,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (field.firstName && field.lastName && field.email && field.phoneNumber) {
      setSuccess(true);
      setField(initState)
    } else {
      setSuccess(false);
    }
  }
  const { firstName, lastName, email, phoneNumber } = field;
  // Task 1: Define state variables using useState to store form data and submission state.

  return (
    <div className="form-container">
      <form
        className="register-form"
        // Task 3: Add a submit handler that prevents default form behavior and checks if all fields are filled.
        onSubmit={handleSubmit}
      >
        {/* Task 2: Add the "value" and "onChange" functionality for each field */}

        {/* First Name Input */}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          // Add value and onChange functionality here
        />

        {submitted && !field.firstName && (
          <span>Please enter your first name</span>
        )}

        {/* Last Name Input */}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          // Add value and onChange functionality here
        />

        {submitted && !field.lastName && (
          <span>Please enter your last name</span>
        )}

        {/* Email Input */}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          // Add value and onChange functionality here
        />

        {submitted && !field.email && <span>Please enter your email</span>}

        {/* Phone Number Input */}
        <input
          id="phone-number"
          className="form-field"
          type="text"
          placeholder="Phone number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          // Add value and onChange functionality here
        />

        {submitted && !field.phoneNumber && (
          <span>Please enter your phone number</span>
        )}

        {/* Submit Button */}
        <button className="form-field" type="submit">
          Register
        </button>
        {/* Task 4: Add success message when the form is correctly submitted */}
        {success && <span>Registration succesfull!</span>}
      </form>
    </div>
  );
}
