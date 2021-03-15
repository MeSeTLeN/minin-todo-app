import React, { Component, Fragment } from "react";

export default class Modal extends Component {
  state = {
    isOn: false,
  };
  render() {
    return (
      <Fragment>
        <button onClick={() => this.setState({ isOn: true })}>
          Open Modal
        </button>
        {this.state.isOn && (
          <div className="modal">
            <div className="modal-body">
              <h1>Modal</h1>
              <button onClick={() => this.setState({ isOn: false })}>
                Close Modal
              </button>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
