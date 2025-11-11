import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../css/ToDoList.css";

const ToDoList = () => {
  const navigate = useNavigate();
  const [toDoList, setToDoList] = useState([]);
  const textRef = useRef();
  const url = "http://localhost:5000";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}/listOut`);
      setToDoList(response.data);
    };
    fetchData();
  }, []);

  const addList = () => {};

  const handleDelete = (id) => {};

  const logOut = () => {
    if (confirm("sure?") == true) {
      navigate("/");
      document.removefrm.submit();
    } else {
      return;
    }
  };

  return (
    <div>
      <button onClick={logOut}>LogOut</button>
      <h2>To Do List Page</h2>
      <input ref={textRef} placeholder="insert your memo" />
      <button onClick={addList}>Click</button>
      <table>
        <tbody>
          {toDoList.map((memo, i) => {
            return (
              <tr key={i}>
                <td>{memo.memo_content}</td>
                <td>
                  <button onClick={() => handleDelete(memo.memo_id)}>
                    削除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ); //return
}; //ToDoList

export default ToDoList;
