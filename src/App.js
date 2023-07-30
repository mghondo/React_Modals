import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

function App() {
  return (
    <div className="App">
      <Modal isOpen={true}>
        <h2>Modal Title</h2>
        <p>Modal Body</p>
      </Modal>
    </div>
  );
}

export default App;
