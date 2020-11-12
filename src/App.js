import React, { Component } from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Food from "./food";
import Notfound from "./Notfound";
import SearchFood from "./FoodSearch";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/food/:name"
            render={(routerProps) => (
              <Food name={routerProps.match.params.name} />
            )}
          />
          <Route exact path="/" render={() => <SearchFood />} />
          <Route render={() => <Notfound />} />
        </Switch>
      </div>
    );
  }
}
