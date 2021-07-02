import React, { Fragment, useRef, useState } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

export function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const AddUserhandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (no-empty values).",
      });
      return;
    }
    if (enteredUserAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid  age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };


  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserhandler}>
          <label htmlFor="username">User name</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="username">Age (Years)</label>
          <input id="username" type="text" ref={ageInputRef} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Fragment>
  );
}

