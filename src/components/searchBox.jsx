import { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./searchBox.module.scss";
import propTypes from "prop-types";
import NamesContainer from "../components/namesContainer";

class SearchBox extends Component {
  state = {
    searchField: "",
  };

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
    this.props.onChange(this.state.searchField);
  };

  // searchKey = () => {
  //   return this.props.data.filter((val) =>
  //     val[this.props.searchkey]
  //       .toLowerCase()
  //       .includes(this.state.searchField.toLowerCase())
  //   );
  // };

  searchKey = () => {
    if (this.props.searchkey === "undefined") {
      return this.props.data.filter((val) =>
        val[this.props.searchkey]
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase())
      );
    }
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

    let { className, iconDirection } = this.props;
    return (
      <>
        <div
          className={`${styles["container"]} ${
            styles[this.props.iconDirection]
          } ${className ? className : styles["container"]} ${iconDirection}`}
        >
          <input
            type="text"
            className={styles["search-field"]}
            placeholder={this.props.placeholder}
            searchkey={this.props.searchkey}
            onChange={this.handleChange}
          />
          <button type="submit" className={styles["button"]}>
            <FontAwesomeIcon icon={faSearch} className={styles["icon"]} />
          </button>
        </div>

        <NamesContainer names={this.searchKey()} />
      </>
    );
  }
}
SearchBox.propTypes = {
  dataList: propTypes.array,
  searchkey: propTypes.string.isRequired,
  className: propTypes.string,
  placeholder: propTypes.string,
  iconDirection: propTypes.oneOf(["left", "right"]),
};

export default SearchBox;
