import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open Modal
        </button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h2>Modal body</h2>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close Modal
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
