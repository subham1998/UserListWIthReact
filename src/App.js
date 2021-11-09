import React, { useState } from "react";
import UserList from "./components/UserList/UserList";
import AddUser from "./components/Users/AddUser";

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    const userInfo = { id: Math.random().toString(), ...user };
    setUsers((prevUsers) => {
      return [userInfo, ...prevUsers];
    });
  };
  return (
    <div>
      <AddUser onAddUser={handleAddUser}></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
