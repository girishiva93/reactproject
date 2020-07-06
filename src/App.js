import React, { Component } from "react";
import { CardList } from "./coponents/card-list/card-list.coponent";
import "./App.css";
import { SearchBox } from "./coponents/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this); //search
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state; //search function
    const filteredMonsters = monsters.filter((
      monster //search function
    ) => monster.name.toLowerCase().includes(searchField.toLowerCase())); //search function
    return (
      <div className="App">
        <h2>Monster Rolodex</h2>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
