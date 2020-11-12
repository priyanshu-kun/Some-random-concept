import React, { Component } from "react";
import "./styles.css";
import { Redirect } from "react-router-dom";

export default class Food extends Component {
  render() {
    let url = `https://source.unsplash.com/1000x600/?${this.props.name}`;

    return (
      <div className="App">
        {/\d/g.test(this.props.name) ? (
          <Redirect to="/" />
        ) : (
          <>
            {" "}
            <h1>I love to eat {this.props.name}</h1>
            <img src={url} alt={this.props.name} />
          </>
        )}
      </div>
    );
  }
}
