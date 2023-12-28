import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoData, editTodoData } from "../redux/slice";
import sty from "../page.module.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";
import { ImCross } from "react-icons/im";
const Table = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.user.todoData);
  const baseUrl = "http://localhost:8000";

  function handleDelete(e, id) {
    e.preventDefault();
    axios.post(`${baseUrl}/delete-todo-data`, { id: id }).then((response) => {
      dispatch(addTodoData(response.data.data));
    });
  }
  async function handleEdit(e, id, title, description) {
    e.preventDefault();
    const data = {
      id: id,
      title: title,
      description: description,
    };
    dispatch(editTodoData(data));
  }

  function handleChangeStatus(e, id) {
    axios.post(`${baseUrl}/edit-todo-status`, { id: id }).then((response) => {
      dispatch(addTodoData(response.data.data));
    });
  }
  useEffect(() => {
    axios.get(`${baseUrl}/add-task`).then((response) => {
      dispatch(addTodoData(response.data.data));
    });
  }, []);
  return (
    <table className={sty.table}>
      <thead>
        <tr className={sty.trmain} style={{ background: "yellow" }}>
          <th>Title</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Status</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todoData &&
          todoData.map((data) => {
            return (
              <tr key={data._id}>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>
                  <FaEdit
                    onClick={(e) =>
                      handleEdit(e, data._id, data.title, data.description)
                    }
                  />
                </td>
                <td>
                  {data.status == true ? (
                    <FaCheckSquare
                      onClick={(e) => {
                        handleChangeStatus(e, data._id);
                      }}
                    />
                  ) : (
                    <IoCheckmarkDone />
                  )}
                </td>
                <td>
                  <MdDelete onClick={(e) => handleDelete(e, data._id)} />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
