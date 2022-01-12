import React, {Component} from "react";
import "./people-page.css";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../Row";
import ErrorBoundry from "../error-boundry";



export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(item) => `${item.name}`}
      />
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
        <Row left={itemList} right={personDetails} />
    );
  }
}