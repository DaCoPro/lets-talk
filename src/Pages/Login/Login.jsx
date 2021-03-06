import "./Login.css";
import logo from "./logo.png";
import { getToken } from "../../utilities/users-service";
import { useState } from "react";
import * as usersAPI from "../../utilities/users-api";

export default function Login({ setUser }) {
  const [credentials, setCredentials] = useState({
    username: "Username",
    password: "Password",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  // slight bug here where error message never shows
  async function handleSubmit(evt) {
    evt.preventDefault();
    //fix weird code here
    const something = await usersAPI.login(credentials);
    console.log(something);
    setUser(getToken());
    setError("Log In Failed - Try Again");
  }

  return (
    <div className="LoginPage">
      <div>
        <div className="LoginHeader">
          <img src={logo} />
          <h1 className="Bmail">Bmail</h1>
        </div>
        <div className="LoginForm" onSubmit={handleSubmit}>
          <form autoComplete="off">
            <div className="LoginField">
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="LoginField">
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </div>
  );
}
