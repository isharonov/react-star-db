import React, {Component} from "react";

import Header from "../header";
import { SwapiServiceProvider } from "../swapi-service-context";
import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState({
      showRandomPlanet: !this.state.showRandomPlanet
    })
  }

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
          <div className="stardb-app">
            <Header />

            <PersonDetails itemId={11} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={5} />

            <PersonList />

            <StarshipList />

            <PlanetList />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};