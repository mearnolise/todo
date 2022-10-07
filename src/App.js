import React from "react";
import { useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import InputForm from "./component/InputForm";
import CheckboxLabels from "./component/checkbox";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

function App() {
  const { todo } = useSelector((state) => state.form);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="background-black">
      <div className="checkbox-box">
        <h1 className="title-text">TODO LIST</h1>
        <InputForm />
        <FormGroup>
          {todo.map((todo) => (
            <CheckboxLabels todo={todo} key={todo.id} />
          ))}
        </FormGroup>
      </div>
    </div>
  );
}

export default App;
