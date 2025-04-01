import React, { useState } from "react";
let init = {
  name: "",
  email: "",
  password: "",
};
function Login() {
  const [formState, setFormState] = useState(init);
  function handleChange(e) {
    console.log(e.target.value);
    const { name, value } = e.target;
    console.log(name, value);
    setFormState({
      ...formState,
      [name]: value,
    });
  }
  console.log(formState);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label>Name</label>
          <br />
          <input name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input name="email" onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
