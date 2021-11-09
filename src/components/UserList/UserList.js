import classes from "./UserList.module.css";

import Card from "../../UI/Card";

const UserList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age}) years old
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
