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
    this.searchKeys();
  };
  /**
   * checks if the key is undefined and returns empty array.
   * if the key has value then it console.log the searched value
   */
  // searchKey = () => {
  //   if (this.props.searchkey === "undefined") {
  //     return "";
  //   } else {
  //     const resultData = this.props.data.filter((val) =>
  //       val[this.props.searchkey]
  //         .toLowerCase()
  //         .includes(this.state.searchField.toLowerCase())
  //     );
  //     this.props.result(resultData);
  //   }
  // };

  // searchKeys = () => {
  //   const searchkeys = this.props.searchkeys;
  //   let resultData = [];
  //   let result = {};
  //   searchkeys.forEach((searchkey) => {
  //     result["data"] = [];
  //   });

  //   this.props.data.forEach((getData) => {
  //     for (let skIndex = 0; skIndex < searchkeys.length; skIndex++) {
  //       const key = searchkeys[skIndex];
  //       if (getData[key]) {
  //         if (
  //           getData[key]
  //             .toLowerCase()
  //             .includes(this.state.searchField.toLowerCase())
  //         ) {
  //           result["data"].push(getData);
  //         }
  //       }
  //     }
  //   });
  //   searchkeys.forEach((searchkey) => {
  //     resultData.push(...result["data"]);
  //   });

  //   this.props.result(resultData);
  // };
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

          {/* <button type="submit" className={styles["button"]}> */}
          <FontAwesomeIcon icon={faSearch} className={styles["icon"]} />
          {/* </button> */}
        </div>
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

SearchBox.defaultProps = {
  placeholder: "",
  className: "",
  iconPosition: "right",
};

export default SearchBox;
