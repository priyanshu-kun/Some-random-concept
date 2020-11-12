import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default class SearchFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Search for food!</h1>
        <input
          type="text"
          placeholder="Search for food"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Link to={`/food/${this.state.query}`}>Go</Link>
      </div>
    );
  }
}
