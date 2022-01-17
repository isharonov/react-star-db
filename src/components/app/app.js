import React, {Component} from "react";

import Header from "../header";
import { SwapiServiceProvider } from "../swapi-service-context";
import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import DummySwapiService from "../../services/dummy-swapi-service";
import RandomPlanet from "../random-planet";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";
import {BrowserRouter as Router, Route, Routes, useParams} from "react-router-dom";
import {StarshipDetails} from "../sw-components";

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
                        DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Routes>
                <Route path="/" element={<h2>Welcome to Star DB</h2>} />
                <Route path="/people/" element={<PeoplePage />} >
                  <Route path="/people/:id" element={<PeoplePage />} />
                </Route>
                <Route path="/planets" element={<PlanetsPage />} />
                <Route path="/starships" element={<StarshipsPage />} />
                <Route path="/starships/:id" element={<StarshipWrapper />} />
              </Routes>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};

const StarshipWrapper = () => {
  const { id } = useParams();
  return (<StarshipDetails itemId={id} />);
};