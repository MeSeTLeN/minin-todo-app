import React, { Component, Fragment } from 'react'

export default class Modal extends Component {
  state = {
    isOpen: false,
  }
  render() {
    return (
      <Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open Modal
        </button>

        {this.state.isOpen ? (
          <div className='modal'>
            <div className='modal-body'>
              <h1>Modal</h1>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close Modal
              </button>
            </div>
          </div>
        ) : null}
      </Fragment>
    )
  }
}
