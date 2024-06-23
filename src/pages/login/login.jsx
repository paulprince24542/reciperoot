import React, { useState } from "react";
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";
import { useNavigate } from "react-router-dom";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  var dispatch = useDispatch();
  const navigate = useNavigate();

  // ! Login User
  const onLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        dispatch(
          setUser({
            email: user.email,
            emailVerified: user.emailVerified,
            uid: user.uid,
            isAuthenticated: true,
          })
        );
        if (user.uid) {
          localStorage.setItem("jwt", user.accessToken);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
    console.log(email, password);
  };

  // ! Setup authentication

  return (
    <>
      <div className="container">
        <div className="login-wrapper">
          <div className="login">
            <h3 className="text-center mb-4">Login</h3>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingInput">Pasword</label>
            </div>
            <button className="btn btn-primary mt-3" onClick={onLogin}>
              Login
            </button>
            <p className="mt-2" style={{ color: "red" }}>
              {error ? error : ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
