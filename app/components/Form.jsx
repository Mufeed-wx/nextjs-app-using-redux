import React, { useRef, useState } from "react";
import { addTodoData, editDefaultData } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Form = () => {
  const baseUrl = "http://localhost:8000";
  const formRef = useRef();
  const dispatch = useDispatch();

  let todoEdit = useSelector((state) => state.user.editData);

  function handleClick(e) {
    e.preventDefault();
    const formData = formRef.current;
    axios
      .post(`${baseUrl}/add-task`, {
        title: formData["title"].value,
        description: formData["description"].value,
      })
      .then((response) => {
        formRef.current = null;
        console.log(response.data.data);
        dispatch(addTodoData(response.data.data));
      });
  }

  function handleEditValue(e) {
    e.preventDefault();
    const formData = formRef.current;
    axios
      .post(`${baseUrl}/edit-todo-task`, {
        id: todoEdit.id,
        title: formData["title"].value,
        description: formData["description"].value,
      })
      .then(async (response) => {
        dispatch(addTodoData(response.data.data));
        dispatch(editDefaultData());
        formRef.current.reset();
      });
  }
  return (
    <form ref={formRef} action="">
      <input
        placeholder="Title"
        type="text"
        defaultValue={todoEdit.title}
        name="title"
      />
      <input
        placeholder="Description"
        type="text"
        defaultValue={todoEdit.description}
        name="description"
      />
      {todoEdit.status == false ? (
        <button onClick={handleClick}>ADD TASK</button>
      ) : (
        <button onClick={handleEditValue}>Edit</button>
      )}
    </form>
  );
};

export default Form;
