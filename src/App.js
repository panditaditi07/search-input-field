// import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
// import SearchBox from "./components/searchBox";
// import { searchData } from "./data/searchData";
import searchData from "./data/jsonData.json";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {
    searchField: "",
    searchData: "",
  };

  // searchKey = () => {
  //   return this.state.partners.filter((name) =>
  //     name.name.toLowerCase().includes(this.state.searchField.toLowerCase())
  //   );
  // };

  /**
   *
   */
  render() {
    // console.log();
    // const { searchField, partners } = this.state;
    // const filterNames = partners.filter((val) =>
    //   val.name.toLowerCase().includes(searchField.toLowerCase())
    // );
    return (
      <>
        <div className="App">
          {/* <SearchBox data={searchData} placeholder="Search here..." /> */}
          <SearchBar
            data={searchData}
            placeholder="Search here..."
            icons="left"
          />
        </div>
      </>
    );
  }
}

export default App;
