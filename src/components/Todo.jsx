import React from "react";
import { useState } from "react";

//todo component

export default function ToDo(props) {
  return (
    <section className="todo">
      {props.todo.map((todo, index) => {
        return (
          <div key={todo.id} className="todo-container">
            <input type="checkbox" className="todo-checkbox" />
            <h2>{todo.objectiveText}</h2>
            <p>{todo.objectiveDate}</p>
            <div className="btn-container">
              <button
                className="delete-btn btn"
                onClick={() => props.handleDelete(todo.id)}
              >
                <img src="../images/delete.png" className="delete icon" />
              </button>
              <button
                className="edit-btn btn"
                onClick={() => props.handleEdit(todo.id)}
              >
                <img src="../images/edit.png" className="edit icon" />
              </button>
            </div>

            {/**popUp window */}
            {props.popUp && (
              <div className="popUp-container">
                <div className="popUp">
                  <div className="popUp-form-container">
                    <div>
                      <input
                        type="text"
                        placeholder="your objective"
                        className="popUp-form-text popUp-form-input"
                        name="updateObjectiveText"
                        onChange={props.handleUpdateChange}
                      />
                    </div>
                    <div>
                      <input
                        type="date"
                        className="popUp-form-date popUp-form-input"
                        name="updateObjectiveDate"
                        onChange={props.handleUpdateChange}
                      />
                    </div>

                    <button
                      className="popUp-form-input update-btn"
                      onClick={props.handleUpdate}
                    >
                      Update objective
                    </button>
                  </div>
                  <button
                    className="popUp-form-input update-btn close-btn"
                    onClick={props.handleClose}
                  >
                    Close window
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
