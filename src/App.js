// import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import SearchBox from "./components/searchBox";
// import { searchData } from "./data/searchData";
import searchData from "./data/jsonData.json";

class App extends Component {
  state = {
    searchField: "",
    searchData: "",
  };

  icons = () => {};
  // searchKey = () => {
  //   return this.state.partners.filter((name) =>
  //     name.name.toLowerCase().includes(this.state.searchField.toLowerCase())
  //   );
  // };

  /**
   *
   */
  render() {
    // console.log(this.state.searchData);
    // const { searchField, partners } = this.state;
    // const filterNames = partners.filter((val) =>
    //   val.name.toLowerCase().includes(searchField.toLowerCase())
    // );
    return (
      <div className="App">
        <SearchBox
          data={searchData}
          placeholder="Search here..."
          searchKey="name"
        />
      </div>
    );
  }
}

export default App;
