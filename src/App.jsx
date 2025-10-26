import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from './pages/Login'
import ToDoList from './pages/ToDoList'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/ToDoList" element={<ToDoList />} />
      </Routes>
    </Router>
  )
}

export default App
