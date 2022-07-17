import React from "react";
import "./App.css"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import banner from "./ss-image.jpeg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/admin";
import Form from "./components/forms/Form";

export default function App() {
  return (
    <div>
      {/* <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol size="12" lg="2" md="6" sm="12"></MDBCol>
          <MDBCol size="12" lg="8" md="12" sm="12" className="main">
            {window.location.pathname === "/onsite" ? "onsite form" : <OffSite />}
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}

      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin/>} />
          <Route path="/" element={<Form type="offsite"/>} />
          <Route path="/onsite" element={<Form type="onsite"/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}



