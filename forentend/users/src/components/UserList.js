import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../styles/UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const addUser = () => {
    axios
      .post("http://localhost:8080/api/users", { name, email })
      .then((response) => {
        setUsers([...users, response.data]);
        setName("");
        setEmail("");
      });
  };

  return (
    <div className="container">
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <span>({user.email})</span>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>
    </div>
  );
};

export default UserList;