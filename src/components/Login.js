import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      //redirect
      localStorage.setItem("token", json.authToken);
      props.showAlert("Logged in Successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid pt-4 my-4 border border border-black border-opacity-25 rounded shadow-lg">
      <h2 className="text-center border-bottom border-opacity-25 pb-3">
        Login Page
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-4">
          <label htmlFor="email" className="form-label mx-2">
            Email address
          </label>
          <input
            type="email"
            className="form-control shadow-sm "
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3 mt-4 ">
          <label htmlFor="password" className="form-label mx-2">
            Password
          </label>
          <input
            type="password"
            className="form-control shadow-sm mb-4"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center border-top  ">
          <button
            type="submit"
            className="btn btn-outline-dark my-5 shadow-lg"
          >

            Continue     <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
