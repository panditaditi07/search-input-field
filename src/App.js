import { Component } from "react";
import "./App.css";
import { searchData } from "./data/searchData";
// import searchData from "./data/jsonData.json";
// import SearchBar from "./components/SearchBar";
import SearchBox from "./components/searchBox";

class App extends Component {
  state = {
    searchData: "",
  };

  /**
   * Use serachBar component to get the SearchInput
   */
  render() {
    console.log(searchData);
    return (
      <>
        <div className="App">
          <SearchBox
            data={searchData}
            placeholder="Search here"
            iconDirection="left"
            searchkey="name"
            onChange={(value) => {
              console.log("res", value);
            }}
          />
        </div>
      </>
    );
  }
}

export default App;
