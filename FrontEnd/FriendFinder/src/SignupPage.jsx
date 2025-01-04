import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import SignUp from "./assets/SignUp.jpg";

function Signup() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3030/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          window.location.href = "http://localhost:5173/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
  return (
    <div className="container p-5">
      <div className="row p-5" style={{ marginTop: "15px" }}>
        <div className="col-6 p-5">
          <img src={SignUp} style={{ width: "110%" }} />
        </div>

        <div className="col-6 p-5">
          <h1 className="mb-2 fs-3 fw-bold" style={{ marginLeft: "17rem" }}>
            SignUp Now
          </h1>
          <br />
          <form onSubmit={handleSubmit} style={{ marginLeft: "11rem" }}>
            <div style={{ margin: "30px" }}>
              <input
                style={{ width: "21rem", height: "40px", borderRadius: "5rem" }}
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div style={{ margin: "30px" }}>
              <input
                style={{ width: "21rem", height: "40px", borderRadius: "5rem" }}
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
              />
            </div>
            <div style={{ margin: "30px" }}>
              <input
                style={{ width: "21rem", height: "40px", borderRadius: "5rem" }}
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <button
              style={{
                padding: "8px",
                color: "white",
                fontWeight: "bold",
                borderBottom: "1px solid #ddd",
                width: "8rem",
                marginLeft: "7rem",
                marginTop: "12px",
              }}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
            <br />
            <br />
            <span style={{ marginLeft: "5rem" }}>
              Already have an account? <Link to={"/login"}>Login</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Signup;
