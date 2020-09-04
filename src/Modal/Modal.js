import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
  render() {
    return (
      <React.Fragment>
        <button>Open modal</button>
        <div className="modal">
          <div className="modal-body">
            <h1>Modal title</h1>
            <p>Modal text</p>
            <button>Close modal</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
