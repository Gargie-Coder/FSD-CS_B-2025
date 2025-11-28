import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./Pages/Registration";
import MainLayout from "./Pages/MainLayout";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [data, setData] = useState();

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login logData={data} />} />

        <Route
          path="/register"
          element={<Registration regData={setData} />}
        />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/" element={<MainLayout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
