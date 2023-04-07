import React from "react";
import { useState } from "react";

//todo component

export default function ToDo(props) {
  //handle delete
  function handleDelete(id) {
    props.handleDelete(id);
  }

  //handle edit
  function handleEdit() {
    console.log("edit");
  }

  return (
    <section className="todo">
      {props.todo.map((todo, index) => {
        return (
          <div key={props.id} className="todo-container">
            <input type="checkbox" className="todo-checkbox" />
            <h2>{todo.objectiveText}</h2>
            <p>{todo.objectiveDate}</p>
            <div className="btn-container">
              <button
                className="delete-btn btn"
                onClick={() => handleDelete(todo.id)}
              >
                <img src="../images/delete.png" className="delete icon" />
              </button>
              <button className="edit-btn btn" onClick={handleEdit}>
                <img src="../images/edit.png" className="edit icon" />
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
