import React, { useState } from "react";
import "./App.css";
import { Input } from "antd";

export default function Formexample() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  const { firstName, lastName, email, password } = formData;
  const areAllFieldsFilled =
    firstName !== "" && lastName !== "" && email !== "" && password !== "";
  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ firstName: "", lastName: "", email: "", password: "" });
  };
  return (
    <div>
      <h1 style={{ color: "red", margin: "30px" }}>Form Example</h1>
      <form className="form1">
        <Input
          value={firstName}
          size="large"
          onChange={(e) => updateFormData(e)}
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />{" "}
        <br />
        <br />
        <Input
          value={lastName}
          size="large"
          onChange={(e) => updateFormData(e)}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />{" "}
        <br />
        <br />
        <Input
          value={email}
          size="large"
          onChange={(e) => updateFormData(e)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />{" "}
        <br />
        <br />
        <Input
          value={password}
          size="large"
          onChange={(e) => updateFormData(e)}
          placeholder="Password"
          type="password"
          name="password"
          required
        />{" "}
        <br />
        <br />
        <button
          className="cssButton"
          type="submit"
          onClick={submitForm}
          disabled={!areAllFieldsFilled}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
