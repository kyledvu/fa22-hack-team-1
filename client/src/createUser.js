import React, { Component } from "react";
import {
  BrowserRouter as Router,
  useNavigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./CreateUser.css";

export default function CreateUser() {
  const navigate = useNavigate();

  const cancel = () => {
    //If user entered correct credentials
    navigate("../Login");
  };

  return (
    <>
      <div class="background">
        <form id="createUser" action="action_page.php">
          <div class="container" />
          <h1>Sign Up</h1>
          <hr />
          <label for="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            required
          />{" "}
          <br />
          <label for="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            required
          />{" "}
          <br />
          <label for="birthday">
            <b>Birthday</b>
          </label>
          <input type="date" id="birthday" name="birthday" required />
          <br />
          <br />
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />{" "}
          <br />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />{" "}
          <br />
          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />{" "}
          <br />
          <div class="clearfix">
            <button type="button" class="cancelbtn" onClick={cancel}>
              Cancel
            </button>
            <button type="submit" class="signupbtn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
