import { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./searchBox.module.scss";
import propTypes from "prop-types";

class SearchBox extends Component {
  state = {
    searchField: "",
  };

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
    this.props.onChange(this.state.searchField);
    this.searchKeys();
  };

  /**
   * searchkeys returns the array of objects as output
   *
   */
  searchKeys = () => {
    let data = this.props.data;
    let result = [];
    let searchkeys = this.props.searchkeys;
    searchkeys.forEach((searchkey) => {
      data.forEach((getData) => {
        if (getData[searchkey]) {
          if (
            getData[searchkey]
              .toLowerCase()
              .includes(this.state.searchField.toLowerCase())
          ) {
            result.push(getData);
          }
        }
      });
    });

    this.props.result(result);
  };
  render() {
    /**
     * this will render the searchBar component
     */

    let { className, iconPosition, placeholder } = this.props;

    return (
      <>
        <div
          className={`${styles["container"]} ${styles[iconPosition]} ${
            className ? className : styles["default"]
          } ${iconPosition}`}
        >
          <form>
            <input
              type="text"
              className={styles["search-field"]}
              placeholder={placeholder}
              onChange={this.handleChange}
            />
          </form>
          <button type="submit" className={styles["button"]}>
            <FontAwesomeIcon icon={faSearch} className={styles["icon"]} />
          </button>
        </div>
      </>
    );
  }
}
SearchBox.propTypes = {
  /**
   *  must be array of objects
   */
  data: propTypes.array,
  /**
   * must be array of object keys
   */
  searchkeys: propTypes.arrayOf(propTypes.string),
  /**
   * must be a string (searchInput)
   */
  className: propTypes.string,
  /**
   * must be a string
   */
  placeholder: propTypes.string,
  /**
   * must be a string and must have value left/right
   */
  iconPosition: propTypes.oneOf(["left", "right"]),
};

SearchBox.defaultProps = {
  placeholder: "",
  className: "",
  iconPosition: "right",
};

export default SearchBox;
