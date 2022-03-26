import React, { useState } from "react";
import "./App.css";
import { Card } from "react-bootstrap";
function App() {
  const [newdata, setnewData] = useState([]);

  const apiGet = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((json) => setnewData(json.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white header-bar">
            <div className="col p-2">
              <h2 className="text-center">User List</h2>
              <h6 className="text-center">
                Click the fetch button to fetch users from the api
              </h6>
              <button className="button btn-sm" onClick={apiGet}>
                Fetch
              </button>
              <br></br>
            </div>
          </div>
          <div className="row p-2 m-2 mt-1">
            {newdata.map((item) => (
              <Card
                className="container-fluid"
                style={{
                  width: "16rem",
                  marginLeft: 15,
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card.Img variant="top" src={item.avatar} />
                <Card.Body>
                  <Card.Title>
                    ID No.: {item.id}
                    <br></br>
                    Name: {item.first_name} {item.last_name}
                  </Card.Title>
                  <Card.Text style={{ display: "flex" }}>
                    Email:
                    {item.email}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
