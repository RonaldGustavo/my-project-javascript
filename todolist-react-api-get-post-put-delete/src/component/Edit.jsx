import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");

  const { dataid } = useParams();

  const navigate = useNavigate();

  const currenDate = new Date().toLocaleString();

  // get data untuk ditampilin di form update
  useEffect(() => {
    let urlAPI =
      "https://64043c8b3bdc59fa8f34a799.mockapi.io/todolist/" + dataid;
    fetch(urlAPI)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setId(res.id);
        setName(res.name);
        setActivity(res.activity);
        setDescription(res.description);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    let urlAPI =
      "https://64043c8b3bdc59fa8f34a799.mockapi.io/todolist/" + dataid;
    try {
      let res = await fetch(urlAPI, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: id,
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
      <h1 className="heading">Edit Data</h1>
      <form action="" id="form-adddata" method="post" onSubmit={handleSubmit}>
        <label For="id" className="label">
          ID
        </label>
        <input
          type="text"
          name="fullname"
          id="id"
          placeholder="ID"
          className="input"
          value={id}
          disabled
        ></input>
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
  );
}

export default Edit;
