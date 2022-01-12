import React, {Component} from "react";

import Header from "../header";

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
        <div className="stardb-app">
          <Header />

          <PersonDetails itemId={11} />

          <PlanetDetails itemId={5} />

          <StarshipDetails itemId={5} />

          <PersonList>
            { ({name}) => <span>{name}</span> }
          </PersonList>

          <StarshipList>
            { ({name}) => <span>{name}</span> }
          </StarshipList>

          <PlanetList>
            { ({name}) => <span>{name}</span> }
          </PlanetList>

        </div>
      </ErrorBoundry>
    );
  };
};