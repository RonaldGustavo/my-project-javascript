import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Listdata() {
  const [dataItem, setDataItem] = useState([]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");

  const currenDate = new Date().toLocaleString();

  const navigate = useNavigate();

  let RemoveData = async (id) => {
    let urlAPI = "https://64043c8b3bdc59fa8f34a799.mockapi.io/todolist/" + id;
    if (window.confirm("do you want to remove?")) {
      fetch(urlAPI, {
        method: "DELETE",
      })
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

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
          <th>Last Update</th>
          <th>Action</th>
        </tr>
        {dataItem.map((data) => {
          return (
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.activity}</td>
              <td>{data.description}</td>
              <td>{data.date}</td>
              <td className="action">
                <button
                  className="btn-update"
                  onClick={() => {
                    navigate("/editdata/" + data.id);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn-delete"
                  onClick={() => {
                    RemoveData(data.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Listdata;
