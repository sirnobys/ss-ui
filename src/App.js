import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/admin";
import Form from "./components/forms/Form";
import MasterForm from "./components/forms/Wizard";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin/>} />
          {/* <Route path="/" element={<Form type="offsite"/>} /> */}
          <Route path="/onsite" element={<Form type="onsite"/>} />
          <Route path="/" element={<MasterForm type="offsite"/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}



