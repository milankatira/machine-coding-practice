import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>React Modal (TypeScript)</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>👋 Hello Modal</h2>
        <p>This modal is written in TypeScript and styled with plain CSS.</p>
      </Modal>
    </div>
  );
};

export default App;
