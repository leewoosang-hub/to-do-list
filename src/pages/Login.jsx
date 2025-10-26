import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const LoginPage = () => {
   const idRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const id = idRef.current.value.trim();
    const pw = pwRef.current.value;

    if (id === "calie" && pw === "1234") {
      setError("");
      navigate("/ToDoList");
    } else {
      setError("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input ref={idRef} placeholder="아이디" />
        </div>
        <div>
          <input ref={pwRef} type="password" placeholder="비밀번호" />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
