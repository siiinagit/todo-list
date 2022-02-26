// imports
import {useState} from "react";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

// TodosList
const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const [grin, setGrin] = useState('#fffbba')
  // funkcija 1
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  //  funkcija 2
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  // funkcija 3
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // render
  return (
    <div>
      <Table>
        <TableBody>
          {todos.length !== 0 ? (
            todos.map((todo) => (
              <TableRow key={todo.id} sx={ todo.completed ? { backgroundColor: '#6FC935'} : {backgroundColor: '#D1D3FF'}}>
                <TableCell align="center">
                  <Box>
                    <Typography
                      variant="h5"
                      component="p"
                      className={`${todo.completed ? "complete" : ""}`}
                    >
                      {todo.title.trimEnd()}
                      
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      sx={{ backgroundColor: "#222aaa" }}
                      onClick={() => handleComplete(todo)}
                    >
                      <CheckIcon color="success" />
                    </IconButton>

                    <IconButton
                      sx={{ backgroundColor: "#222aaa" }}
                      onClick={() => handleEdit(todo)}
                    >
                      <EditIcon color="warning" />
                    </IconButton>
                    <IconButton
                      sx={{ backgroundColor: "#222aaa" }}
                      onClick={() => handleDelete(todo)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>lista je prazna dodajte task</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      
    </div>
  );
};

export default TodosList;
