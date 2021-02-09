import { Component } from "react";
import "./App.scss";
// import { searchData } from "./data/searchData";
import searchData from "./data/jsonData.json";
import SearchBox from "./components/SearchBox/searchBox";
// import Dropdown from "./components/Dropdown/Dropdown";

class App extends Component {
  state = {
    searchData: [],
  };

  componentDidMount = () => {
    this.setState((state, props) => ({
      searchData: searchData.partners,
    }));
  };
  getResult = (result) => {
    console.log(result);
  };
  getValue = (res) => {
    console.log(res);
  };
  /**
   * Use searchBar component to Search the data
   */
  render() {
    console.log(this.state.searchData);
    return (
      <>
        <div className="App">
          <SearchBox
            data={this.state.searchData}
            placeholder="Search"
            iconPosition="right"
            className="searchInput"
            searchkeys={["name", "description"]}
            result={this.getResult}
            onChange={this.getValue}
          />
        </div>
      </>
    );
  }
}

export default App;
