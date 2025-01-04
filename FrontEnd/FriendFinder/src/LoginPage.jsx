import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3030/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
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
    });
  };

  return (
    <div
      className="form_container "
      style={{
        marginTop: "-3rem",
        marginLeft: "32rem",
        backgroundColor: "#fff",
        padding: "2rem 3rem",
        borderRadius: "0.5rem",
        width: "100%",
        height: "30em",
        maxWidth: "470px",
        boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
        background:
          "linear-gradient(90deg,rgba(2, 0, 36, 1),rgba(143, 187, 204, 1) 35%,rgba(0, 212, 255, 1) 100%)",
      }}
    >
      <h2 style={{ fontWeight: "bold", marginLeft: "5rem" }}>Login Account</h2>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
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
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "8px",
            backgroundColor: "blue",
            color: "white",
            fontWeight: "bold",
            borderBottom: "1px solid #ddd",
            width: "8rem",
            marginLeft: "7rem",
            marginTop: "12px",
          }}
        >
          Submit
        </button>
        <br />
        <br />
        <br />
        <span style={{ marginLeft: "6rem" }}>
          Don't have an account?{" "}
          <Link to={"/signup"} style={{ color: "black" }}>
            Signup
          </Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
