import React, { useEffect, useState } from "react";

function Listdata() {
  const [dataItem, setDataItem] = useState([]);

  const getDataItem = async () => {
    const urlAPI = "https://jsonplaceholder.typicode.com/posts";

    const request = await fetch(urlAPI);
    const response = await request.json();
    const data = response.slice(0, 10);
    setDataItem(data);
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
          <th>Title</th>
          <th>Body</th>
        </tr>
        {dataItem.map((data) => {
          return (
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Listdata;
