import React, { Component } from "react";
import "./App.css";
import PathView from "./components/pathView";

class App extends Component {
  state = {
    city: "Berlin",
    astronomicalBody: "sun"
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleCityChange = event => {
    console.log(`setting ${event.target.name} to "${event.target.value}"`);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAstronomicalBodyChange = event => {
    console.log(`setting astronomicalBody to "${event.target.name}"`);
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
  };

  componentDidMount = () => {
    // default selection
    let sunButton = document.getElementById("sun");
    sunButton.classList.add("active");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Sun - Moon paths</p>
        </header>

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

        <PathView
          city={this.state.city}
          astronomicalBody={this.state.astronomicalBody}
        />
      </div>
    );
  }
}

export default App;
