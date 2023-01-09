import React from "react";

import classes from "./UsersList.module.css";
import Card from "../UI/card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.userList.map((user) => (
          <li key={user.id}>
            Name: {user.username} Age: {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
