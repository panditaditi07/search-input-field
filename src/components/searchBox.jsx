import { Component } from "react";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from "./searchBox.module.scss";
import NamesContainer from "../components/namesContainer";
import style from "./searchBar.module.scss";

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
    console.log(this.props);
    /**
     * this will render the searchBar component
     */
    return (
      <>
        <div>
          <input
            type="text"
            className={style[this.props.className]}
            placeholder={this.props.placeholder}
            // searchKey={this.searchKey(this.props.searchKey)}
            onChange={this.handleChange}
          />

          <NamesContainer names={this.searchKey()} />
          {/* <button type="submit" className={styles["search-btn"]}>
            <FontAwesomeIcon icon={faSearch} />
          </button> */}
        </div>
      </>
    );
  }
}
export default SearchBox;
