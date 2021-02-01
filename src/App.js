import { Component } from "react";
import "./App.scss";
// import { searchData } from "./data/searchData";
import searchData from "./data/jsonData.json";
import SearchBox from "./components/SearchBox/searchBox";
import DropDown from "./components/DropDown/dropDown";

class App extends Component {
  state = {
    searchData: "",
  };
  getResult = (result) => {
    console.log(result);
  };
  /**
   * Use searchBar component to Search the data
   */
  render() {
    return (
      <>
        <div className="App">
          <SearchBox
            data={searchData}
            placeholder="Search here"
            iconPosition="right"
            className="searchInput"
            searchkeys={["name", "description"]}
            // result={this.getResult}
            onChange={(value) => {
              console.log("res", value);
            }}
          />
        </div>
        <DropDown
          data={searchData}
          getList={this.getResult}
          multipleSelect={true}
          showKey="name"
          placeholder="Search"
          searchList={{ searchkeys: ["name"] }}
        />
      </>
    );
  }
}

export default App;
