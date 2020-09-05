import React, { Fragment } from "react";
import './Loader.css'

export default () => (
  <Fragment>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </Fragment>
);
