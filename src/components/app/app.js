import React, {Component} from "react";

import Header from "../header";

import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../Row";
import ItemList from "../item-list";

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

    const {
      getAllPeople,
      getAllStarships
    } = this.swapiService;

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

          <Row
            left={
              <ItemList
                getData={getAllPeople}
                onItemSelected={() => {}}>
                { ({name}) => <span>{name}</span> }
              </ItemList>
            }
            right={
              <ItemList
                getData={getAllStarships}
                onItemSelected={() => {}}>
                { ({name}) => <span>{name}</span> }
              </ItemList>
            }
          />

        </div>
      </ErrorBoundry>
    );
  };
};