//  imports
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import "./style.css";
import Container from "@mui/material/Container";

// App
const App = () => {
  // local storage
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  //  states
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  // local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);

  // render
  return (
    <div className="wrap">
      <Container maxWidth="xl">
        <Header />

        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />

        <TodosList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </Container>
    </div>
  );
};

export default App;
