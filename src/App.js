import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");
function App() {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
