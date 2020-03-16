import React, { Component } from "react";
import "../App.css";

export default class Spinner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="spinner-container">
          <img className="spinner" src="loading.gif" alt="Loading" />
        </div>
      </React.Fragment>
    );
  }
}
