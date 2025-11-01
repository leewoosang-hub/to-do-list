import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/ToDoList.css";

const ToDoList = () => {
  const navigate = useNavigate();
  const [toDoList, setToDoList] = useState([]);
  const textRef = useRef();

  const addList = () => {
    const newList = textRef.current.value;
    if (!newList) return; // 空文字を追加しない
    // 新しい配列を作って更新
    setToDoList([...toDoList, newList]);
    textRef.current.value = ""; // 入力欄リセット
  };

  const deleteList = (index) => {
    // 指定したindexを除いた新しい配列を作る
    const updatedList = toDoList.filter((_, i) => i !== index);
    setToDoList(updatedList);
  };

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
      {toDoList.length > 0 ? (
        <div>
          {toDoList.map((list, index) => (
            <div className="list" key={index}>
              {list}
              <button onClick={() => deleteList(index)}>DELTE</button>
            </div>
          ))}
        </div>
      ) : (
        <div>No List</div>
      )}
    </div>
  ); //return
}; //ToDoList

export default ToDoList;
