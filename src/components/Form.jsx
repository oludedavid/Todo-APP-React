import React from "react";
import { useState } from "react";
import ToDo from "./Todo";
import { v4 as uuidv4 } from "uuid";

//form component

export default function Form() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [visible, setVisible] = useState(false);

  // function handleDelete(index) {
  //   setTodos((prevTodo) => {
  //     const newTodo = [...prevTodo];
  //     newTodo.splice(index, 1);
  //     return newTodo;
  //   });
  // }

  function handleDelete(id) {
    setTodos((prevTodo) => {
      const newTodo = prevTodo.filter((todo) => todo.id !== id);
      return newTodo;
    });
  }

  function handleEdit(index, updatedTodo) {
    setTodos((prevTodo) => {
      const newTodo = [...prevTodo];
      newTodo[index] = updatedTodo;
      return newTodo;
    });
  }

  //handle click event
  function handleAddItem() {
    setTodos((prevValue) => [
      ...prevValue,
      {
        objectiveText: text,
        objectiveDate: date,
        id: uuidv4(),
      },
    ]);
    setVisible(true);
  }

  //Handle text change
  function handleTextChange(e) {
    setText(e.target.value);
  }

  //handle date change
  function handleDateChange(e) {
    //on change of date, add the value of date to the date state
    setDate(e.target.value);
  }

  return (
    <section className="form">
      <div className="form-container">
        <div>
          <input
            type="text"
            placeholder="your objective"
            className="form-text form-input"
            onChange={handleTextChange}
          />
        </div>
        <div>
          <input
            type="date"
            className="form-date form-input"
            onChange={handleDateChange}
          />
        </div>
        <div>
          <button className="form-input" onClick={handleAddItem}>
            Add to objectives
          </button>
        </div>
      </div>

      <h1>Objective Items</h1>

      <div className="todo-container">
        {visible && (
          <ToDo
            todo={todos}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )}
      </div>
    </section>
  );
}
