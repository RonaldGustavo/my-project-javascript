import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");

  const currenDate = new Date().toLocaleString();

  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    let urlAPI = "https://64043c8b3bdc59fa8f34a799.mockapi.io/todolist";
    try {
      let res = await fetch(urlAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          activity: activity,
          description: description,
          date: currenDate,
        }),
      });
      let resJson = await res.json();
      //menampilkan object data yang dipost
      console.log(resJson);

      //   direct ke halaman home
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="container-adddata">
        <h1 className="heading">Add Data</h1>
        <form action="" id="form-adddata" method="post" onSubmit={handleSubmit}>
          <label For="name" className="label">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="name"
            placeholder="Full Name"
            className="input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          ></input>
          <label For="activity" className="label">
            Activity
          </label>
          <input
            type="text"
            name="activity"
            id="activity"
            placeholder="Activity"
            className="input"
            onChange={(e) => setActivity(e.target.value)}
            value={activity}
            required
          ></input>
          <label For="description" className="label">
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="input"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></input>

          <button type="submit" id="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
