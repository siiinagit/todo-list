// imports
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Form
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  // funkcija 1
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  // side effect
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  // funkcija 2
  const onInputChange = (e) => {
    setInput(e.target.value.trimStart());
  };

  // funkcija 3
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  // render
  return (
    <form onSubmit={onFormSubmit} style={{ backgroundColor: "#fffaed" }}>
      <TextField
        type="text"
        label="enter the todo... lista"
        InputLabelProps={{ required: false }}
        variant="filled"
        value={input}
        placeholder="enter the todo..."
        required
        onChange={onInputChange}
        color='primary'
      />
      <Button variant="text" type="submit">
        {editTodo ? "OK" : "ADD"}
      </Button>
      <Button
        onClick={() => {
          setInput("");
        }}
      >
        <BackspaceOutlinedIcon />
      </Button>
    </form>
  );
};

export default Form;
