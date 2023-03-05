import React, { useEffect, useState } from "react";

function Listdata() {
  const [dataItem, setDataItem] = useState([]);

  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const todolist = { name, activity, description };

  //   fetch(urlAPI, {
  //     method: "POST",
  //     headers: { "content-Type": "application/json" },
  //     body: JSON.stringify(todolist),
  //   }).then(() => {
  //     console.log("new to do list");
  //   });
  // }

  let handleSubmit = async (e) => {
    let urlAPI = "https://64043c8b3bdc59fa8f34a799.mockapi.io/todolist";
    e.preventDefault();
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
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
    } catch (err) {
      console.log(err);
    }
  };

  const getDataItem = async () => {
    let urlAPI = "https://64043c8b3bdc59fa8f34a799.mockapi.io/todolist";

    const request = await fetch(urlAPI);
    const response = await request.json();

    setDataItem(response);
  };

  useEffect(() => {
    getDataItem();
  });

  return (
    <div className="container-data">
      <h1 className="heading">List Item</h1>
      <table border={1} cellPadding={5} cellSpacing={0} className="table-data">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Activity</th>
          <th>Description</th>
        </tr>
        {dataItem.map((data) => {
          return (
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.activity}</td>
              <td>{data.description}</td>
            </tr>
          );
        })}
      </table>

      <section id="addData">
        <div className="container-adddata">
          <h1 className="heading">Add Data</h1>
          <form
            action=""
            id="form-adddata"
            method="post"
            onSubmit={handleSubmit}
          >
            <label For="inputFullName" className="label">
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
            ></input>
            <label For="inputFullName" className="label">
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
            ></input>
            <label For="inputFullName" className="label">
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
            ></input>

            <button type="submit" id="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Listdata;
