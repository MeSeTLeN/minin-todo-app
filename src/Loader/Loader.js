import React, { Fragment, Component } from "react";
import './Loader.css'

export default class Loader extends Component {
  render() {
    return (
      <Fragment>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </Fragment>
    );
  }
}
