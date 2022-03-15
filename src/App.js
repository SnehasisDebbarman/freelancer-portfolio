import logo from "./logo.svg";
import "./App.css";
import Nav from "./NavBar/Nav";
import Body from "./Body/Body";
import SideNav from "./SideNav/SideNav";
import React, { useState } from "react";

function App() {
  const [SideToggle, setSideToggle] = useState(true);
  return (
    <div className="App">
      {/* <Nav /> */}
      <div
        className={
          SideToggle ? "main-body grid mt-10" : "main-body-toggled grid mt-10"
        }
      >
        <SideNav SideToggle={SideToggle} setSideToggle={setSideToggle} />
        <div className="bg-red-500"></div>
      </div>
    </div>
  );
}

export default App;
