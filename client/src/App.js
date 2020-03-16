import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";
import Spinner from "./components/spinner";
import axios from "axios";

class App extends Component {
  state = {
    imageSrc: "",
    alt: "",
    requesting: false
  };

  triggerAPICall = (city, astronomicalBody) => {
    console.log(city + " + " + astronomicalBody);
    console.log("start request...");
    this.setState({
      requesting: true
    });
    axios
      .get(`/api/paths/${city}/${astronomicalBody}`)
      .then(response => {
        console.log("request end.");
        this.setState({
          imageSrc: response?.data.src,
          alt: `states of the ${astronomicalBody} in ${city}`,
          requesting: false
        });
      })
      .catch(error => {
        console.log("request end.");
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Sun - Moon paths</p>
        </header>
        <Form triggerAPICall={this.triggerAPICall} />
        {!this.state.requesting && (
          <img
            src={this.state.imageSrc}
            alt={this.state.alt}
            className="pathsImage"
          />
        )}
        {this.state.requesting && <Spinner />}
      </div>
    );
  }
}

export default App;
