import React, { Fragment, useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Fragment>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>Modal title</h1>
            <p> modal text</p>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </Fragment>
  );
}
