import React from "react";

const Login = () => {
  return (
    <form>
      <label>Username</label>
      <input type="text" name="username" />
      <br />
      <label>Password</label>
      <input type="password" name="password" />
    </form>
  );
};

export default Login;