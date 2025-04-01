import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

export default function App() {
  // Task 1: Use `useForm` from react-hook-form to manage form inputs, errors, and form submission handling.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // `register` helps associate form fields with validation rules.
  // `handleSubmit` handles form submission when the user clicks the register button.
  // `errors` stores validation error messages to display if the user enters invalid input.

  const [field, setField] = useState();
  const [submitted, setSubmit] = useState(false);

  const onSubmit = (data) => {
    console.log(data)
    setField(data);
    setSubmit(true);
  };

  return (
    <div className="form-container">
      {/* Task 2: Create the form using the `onSubmit` handler from `handleSubmit(onSubmit)`. 
          This function will validate the fields before calling the `onSubmit` function. */}
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        {submitted ? (
          <div className="success-message" data-testid="success-message">
            Registration succesfull!
          </div>
        ) : null}

        {/* Task 3: Create input fields for firstName, lastName, email, and password. 
            Each field should have validation rules (e.g., required fields, pattern matching).
            Use the `register` method to bind the input fields to the form state and handle validation.
        */}

        {/* First Name Input (Example is Provided, please uncomment it) */}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          {...register('firstName', { required: 'First Name is required!' })} 
        /> 
        {/* Display error message if the first name is not entered */}
        <span>{errors.firstName?.message}</span>

        {/* Last Name Input */}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          // Task 4:  Register field with validation rule
          {...register('lastName', { required: 'Last Name is required!' })} 

        />
        {/* Display error message if the last name is not entered */}
        <span>{errors.lastName?.message}</span>

        {/* Email Input */}
        <input
          id="email"
          className="form-field"
          type="email"
          placeholder="Email"
          // Task 5:  Apply validation for email
          {...register('email', { required: 'Eamil is required!' })} 

        />

        <span>{errors.email?.message}</span>

        {/* Password Input */}
        <input
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required!',
            minLength: {
              value: 4,
              message: 'Password must be more than 4 characters',
            },
            maxLength: {
              value: 20,
              message: 'Password cannot exceed 20 characters',
            },
            pattern: {
              // Custom regex pattern for password validation: at least one uppercase letter, one lowercase, and one digit(Regex pattern : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/)
              value:"/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/)",
              message:
                'Password must contain at least one uppercase, one lowercase letter, and one number',
            },
          })}
        />
        <span>{errors.password?.message}</span>

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
