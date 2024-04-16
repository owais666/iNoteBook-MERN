import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      //redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Account Created Successfully", "success");
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
        Signup Page
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-4">
          <label htmlFor="name" className="form-label mx-2">
            Name
          </label>
          <input
            type="text"
            className="form-control shadow-sm"
            id="name"
            aria-describedby="emailHelp"
            onChange={onChange}
            name="name"
          />
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="email" className="form-label mx-2">
            Email address
          </label>
          <input
            type="email"
            className="form-control shadow-sm"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label mx-2 ">
            Password
          </label>
          <input
            type="password"
            className="form-control shadow-sm"
            id="password"
            onChange={onChange}
            name="password"
            minLength={5}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label mx-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control shadow-sm"
            id="cpassword"
            onChange={onChange}
            name="cpassword"
            minLength={5}
            required
          />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center border-top">
          <button type="submit" className="btn btn-outline-dark my-5   shadow-lg">
            Continue &nbsp;<i className="fa-solid fa-user-plus"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
