import { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./searchBox.module.scss";
import propTypes from "prop-types";

class SearchBox extends Component {
  state = {
    searchField: "",
  };

  // searchKey = () => {
  //   const resultData = this.props.data.filter((val) => {
  //     return val[this.props.searchkey]
  //       .toLowerCase()
  //       .includes(this.state.searchField.toLowerCase());
  //   });
  //   this.props.result(resultData);
  // };
  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
    this.props.onChange(this.state.searchField);
    this.searchKey();
  };
  /**
   * checks if the key is undefined and returns empty array.
   * if the key has value then it console.log the searched value
   */
  searchKey = () => {
    if (this.props.searchkey === "undefined") {
      return "";
    } else {
      const resultData = this.props.data.filter((val) =>
        val[this.props.searchkey]
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase())
      );
      this.props.result(resultData);
    }
  };

  // searchKey = () => {
  //   if (this.props.searchkeys === "undefined") {
  //     return "";
  //   }
  //   const resultData = this.props.data.filter((val) => {
  //     const keys = Object.keys(val);
  //     return this.props.searchkeys.some((searchkey) => {
  //       return keys.includes(searchkey)
  //         ? val[searchkey].includes(this.state.searchField)
  //         : false;
  //     });
  //   });
  //   this.props.result(resultData);
  // };

  render() {
    /**
     * this will render the searchBar component
     */

    let { className, iconPosition } = this.props;

    return (
      <>
        <div
          className={`${styles["container"]} ${
            styles[this.props.iconPosition]
          } ${className ? className : styles["defaultInput"]} ${iconPosition}`}
        >
          <input
            type="text"
            className={styles["search-field"]}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
          />

          <button type="submit" className={styles["button"]}>
            <FontAwesomeIcon icon={faSearch} className={styles["icon"]} />
          </button>
        </div>
        <div>{/* <NamesContainer names={this.searchKey()} /> */}</div>
      </>
    );
  }
}
SearchBox.propTypes = {
  dataList: propTypes.array,
  searchkey: propTypes.string,
  searchkeys: propTypes.arrayOf(propTypes.string),
  className: propTypes.string,
  placeholder: propTypes.string,
  iconPosition: propTypes.oneOf(["left", "right"]),
};

export default SearchBox;
