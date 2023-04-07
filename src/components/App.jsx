import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import ToDo from "./Todo";
import Footer from "./Footer";

//main component
export default function App() {
  return (
    <div className="main-cont">
      <Navbar />
      <Form />
    </div>
  );
}
