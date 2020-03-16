import React, { Component } from "react";
import "../App.css";

export default class Form extends Component {
  state = {
    city: "berlin",
    astronomicalBody: "sun"
  };

  handleCityChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.props.triggerAPICall(event.target.value, this.state.astronomicalBody);
  };

  handleAstronomicalBodyChange = event => {
    let buttons = document.getElementsByClassName("astronomicalBody");
    for (let button of buttons) {
      if (button.name === event.target.name) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    }
    this.setState({
      astronomicalBody: event.target.name
    });
    this.props.triggerAPICall(this.state.city, event.target.name);
  };

  componentDidMount = () => {
    // default values
    let sunButton = document.getElementById("sun");
    sunButton.classList.add("active");
    this.props.triggerAPICall(this.state.city, this.state.astronomicalBody);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <section>
            <select
              type="text"
              id="city"
              name="city"
              value={this.state.city}
              onChange={this.handleCityChange}
            >
              <option value="berlin">Berlin</option>
              <option value="athens">Athens</option>
              <option value="paphos">Paphos</option>
              <option value="prague">Prague</option>
              <option value="barcelona">Barcelona</option>
              <option value="krakow">Krakow</option>
            </select>
          </section>

          <section>
            <button
              className="sunButton astronomicalBody"
              type="button"
              id="sun"
              name="sun"
              onClick={this.handleAstronomicalBodyChange}
            >
              Sun
            </button>
            <button
              className="moonButton astronomicalBody"
              type="button"
              id="moon"
              name="moon"
              onClick={this.handleAstronomicalBodyChange}
            >
              Moon
            </button>
          </section>
        </form>
      </React.Fragment>
    );
  }
}
