import { Component } from "react";
import "./App.css";
// import { searchData } from "./data/searchData";
import searchData from "./data/jsonData.json";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {
    searchData: "",
  };

  /**
   *
   */
  render() {
    return (
      <>
        <div className="App">
          <SearchBar
            data={searchData}
            placeholder="Search here..."
            icons="left"
            searchkey="name"
          />
        </div>
      </>
    );
  }
}

export default App;
