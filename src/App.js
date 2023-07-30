import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

function App() {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen}>
        <h2>Modal Title</h2>
        <p>Modal Body</p>
      </Modal>
    </div>
  );
}

export default App;
