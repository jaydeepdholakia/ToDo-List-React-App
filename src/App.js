import { useState, useEffect } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import { ToDos } from "./MyComponents/ToDos";
import { Footer } from "./MyComponents/Footer";
import { CreateToDo } from "./MyComponents/CreateToDo";
import { About } from "./MyComponents/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    let sno;

    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };  

    setTodos([...todos, newTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <CreateToDo addTodo={addTodo} />
                  <ToDos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About></About>
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
