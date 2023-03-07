import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import img_form from "../images/logo_login.png";
import img_logo from "../images/logo_login1.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "bootstrap";

export default class login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("login berhasil!, Welcome " + user.email);
        window.location.href = "/home";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("error: " + errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: "1rem" }}>
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src={img_form}
                        alt="login form"
                        className="img-fluid img-form"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      ></img>
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form method="post">
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <img
                              src={img_logo}
                              alt="logo-company"
                              className="logo-company"
                            ></img>
                            <span className="h1 fw-bold mb-0">Sign In</span>
                          </div>

                          <h5
                            className="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Sign into your account
                          </h5>

                          <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example17">
                              Email address
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="form-control form-control-lg"
                              name="email"
                              value={email}
                              onChange={this.handleChange}
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example27">
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              className="form-control form-control-lg"
                              name="password"
                              value={password}
                              onChange={this.handleChange}
                            />
                          </div>

                          <div className="pt-1 mb-4">
                            <button
                              className="btn btn-dark btn-lg btn-block"
                              type="button"
                              onClick={this.handleSubmit}
                            >
                              Login
                            </button>
                          </div>

                          <p
                            className="mb-5 pb-lg-2"
                            style={{ color: "var(--primary-color);" }}
                          >
                            dont have an account?{" "}
                            <Link
                              to="/register"
                              style={{ color: "var(--primary-color);" }}
                            >
                              Register here
                            </Link>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
