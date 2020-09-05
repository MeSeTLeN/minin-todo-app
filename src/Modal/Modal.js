import React, { Component, Fragment } from "react";
import "./Modal.css";

export default class Modal extends Component {
  state = {
    isOpen: false,
  };

  openModal() {
    this.setState({
      isOpen: true,
    });
  }

  render() {
    return (
      // Fragment same as div
      <Fragment>
        <button onClick={() => this.openModal()}>Open modal!</button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Modal</h1>
              <p>Modal text goes here</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
