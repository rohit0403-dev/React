import React from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  const { register, handleSubmit } = useForm();
  function submitForm(data) {
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)} action="">
        <div>
          <label>Name</label>
          <br />
          <input name="name" {...register("name")} />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input name="email" {...register("email")} />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input type="password" name="password" {...register("password")} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignUp;
