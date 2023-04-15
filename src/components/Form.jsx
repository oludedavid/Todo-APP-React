import React from "react";
import { useState } from "react";
import ToDo from "./Todo";
import { v4 as uuidv4 } from "uuid";

//form component

export default function Form() {
  /*********************** State ******************/

  const [todos, setTodos] = React.useState([]);
  const [formData, setFormData] = useState({
    objectiveText: "",
    objectiveDate: "",
    id: "",
  });

  const [updateFormData, setUpdateFormData] = React.useState({
    updateObjectiveText: "",
    updateObjectiveDate: "",
  });

  const [visible, setVisible] = useState(false);
  const [popUp, setPopUp] = useState(false);

  /*********************** Event handlers ******************/

  //handle change
  //the onChange event handler gets the form data and store in the formData state
  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    //push the value of the input to the formData array state
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value, id: uuidv4() };
    });
  }

  //create a new item: push the formData to the todos array state
  function handleCreateItem() {
    //push the formData to the todos array state
    setTodos((prevValue) => [
      ...prevValue,
      {
        objectiveText: formData.objectiveText,
        objectiveDate: formData.objectiveDate,
        id: uuidv4(),
      },
    ]);

    // make the todo list visible
    setVisible(true);

    // clear the input fields
    setFormData({ objectiveText: "", objectiveDate: "" });
  }

  //edit an item
  function handleEdit(id) {
    // find the item to edit
    const item = todos.find((todo) => todo.id === id);

    // set the initial edit form data to the values of the item
    setUpdateFormData({
      updateObjectiveText: item.objectiveText,
      updateObjectiveDate: item.objectiveDate,
      updateId: id,
    });

    // open the pop-up window
    setPopUp(true);
  }

  //update an item onChange event handler: get the updated value and store it in the updateFormData state
  function handleUpdateChange(event) {
    const { name, value } = event.target;
    //set the value of the text and date input of the corresponding item with the same id with the updated value
    setUpdateFormData((prevFormData) => {
      //we are only updating the value of the input that has been changed and leaving the id unchanged
      return { ...prevFormData, [name]: value };
    });
  }

  //update an item
  function handleUpdate() {
    //find the item to update
    const item = todos.find((todo) => todo.id === updateFormData.updateId);

    //update the item
    item.objectiveText = updateFormData.updateObjectiveText;
    item.objectiveDate = updateFormData.updateObjectiveDate;

    //update the state of the todos array with the updated item
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === item.id) {
          return item;
        } else {
          return todo;
        }
      });
    });

    //close the popUp window
    setPopUp(false);

    //alert the user that the item has been updated
    alert("The item has been updated");
  }

  //delete an item
  function handleDelete(id) {
    setTodos((prevTodo) => {
      const newTodo = prevTodo.filter((todo) => todo.id !== id);
      return newTodo;
    });
  }

  //close the popUp window
  function handleClose() {
    setPopUp(false);
  }

  //store todos in local storage
  React.useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  //update local storage
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /*********************** Return ******************/

  // return the form component
  return (
    <section className="form">
      <div className="form-container">
        <div>
          <input
            type="text"
            value={formData.objectiveText}
            name="objectiveText"
            placeholder="your objective"
            className="form-text form-input"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="date"
            value={formData.objectiveDate}
            name="objectiveDate"
            className="form-date form-input"
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="form-input" onClick={handleCreateItem}>
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
            handleUpdate={handleUpdate}
            handleUpdateChange={handleUpdateChange}
            popUp={popUp}
            handleClose={handleClose}
          />
        )}
      </div>
    </section>
  );
}
