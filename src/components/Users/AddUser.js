import { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorModal from "../../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();
  const handleAddUser = (event) => {
    if (userName.trim() && userAge.trim() && parseInt(userAge.trim()) > 0) {
      const userInfo = {
        name: userName,
        age: parseInt(userAge),
      };
      setUserName("");
      setUserAge("");
      onAddUser(userInfo);
    } else {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age",
      });
    }
    event.preventDefault();
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleUserAgeChange = (event) => {
    setUserAge(event.target.value);
  };

  const handleCloseModal = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={handleCloseModal}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={handleAddUser}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={handleUserNameChange}
          ></input>
          <label htmlFor="age">Age(in years)</label>
          <input
            id="age"
            value={userAge}
            type="number"
            onChange={handleUserAgeChange}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
