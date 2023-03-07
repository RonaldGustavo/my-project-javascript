import { Component } from "react";
import React from "react";
import { getAuth, signOut } from "firebase/auth";

export default class home extends Component {
  handlesubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("signOut berhasil! ");
        window.location.href = "/";
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  render() {
    return (
      <div className="container-home">
        <h1 className="heading-home">Home</h1>
        <button
          className="btn-signout"
          type="button"
          onClick={this.handlesubmit}
        >
          Sign Out
        </button>
      </div>
    );
  }
}
