import { Component } from "react";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./searchBox.module.scss";
import NamesContainer from "../components/namesContainer";

class SearchBox extends Component {
  state = {
    searchField: "",
  };

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  searchKey = () => {
    return this.props.data.filter((val) =>
      val[this.props.searchkey]
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
    );
  };
  render() {
    // console.log(this.props);
    // console.log(this.props.searchkey);

    return (
      <>
        <div>
          <div>
            <input
              type="search"
              className={styles["search-field"]}
              placeholder={this.props.placeholder}
              // searchKey={this.props.searchKey}
              onChange={this.handleChange}
            />
            <NamesContainer names={this.searchKey(this.props.value)} />
          </div>
          {/* <button type="submit" className={styles["search-btn"]}>
            <FontAwesomeIcon icon={faSearch} />
          </button> */}
        </div>
      </>
    );
  }
}
export default SearchBox;
