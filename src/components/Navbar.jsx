import React from "react";
import { useState } from "react";

//The navigation bar component
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="../images/to-do-list.png" className="nav-img" />
      <h1 className="nav-logo">TodoApp.js</h1>
    </nav>
  );
}
