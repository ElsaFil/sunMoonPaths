import React, { Component } from "react";
import "../App.css";
import axios from "axios";

export default class PathView extends Component {
  state = {
    imageSrc: ""
  };
  componentDidMount = () => {
    axios
      .get(
        // TODO: put key in env
        `http://api.wolframalpha.com/v2/query?appid=WJ8EA4-7LHTLKE53J&input=${this.props.astronomicalBody}+${this.props.city}&output=json`
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <img
          src={this.state.imageSrc}
          alt={`states of the ${this.props.astronomicalBody} in ${this.props.city}`}
        />
      </React.Fragment>
    );
  }
}
