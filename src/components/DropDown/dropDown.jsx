import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../SearchBox/searchBox";
import styles from "./dropDown.module.scss";
import propTypes from "prop-types";

class DropDown extends Component {
  state = {
    resultList: [],
    OptionList: [],
    selectedOption: "",
    showList: false,
  };

  getResult = (result) => {
    this.setState({ resultList: [...result] });
  };
  /**
   *
   * @param {option}
   * stores array of Objects of the selected option
   */
  addToList = (option) => {
    const { OptionList } = this.state;
    const { getList } = this.props;
    if (OptionList === "undefined") {
      return [];
    } else {
      const options = [{ ...option }];
      // const options = [...OptionList, { ...option }];
      this.setState({ OptionList: options });
      this.toggle();
    }
    getList(OptionList);
  };

  /**
   * arrow angle is changed
   */
  toggle = () => {
    this.setState({ showList: !this.state.showList });
  };
  /**
   *
   * @param {option}
   * stores the selected option
   */
  getListData = (option) => {
    this.setState({ selectOption: option });
  };
  /**
   *
   * @param {option}
   * checks wheather the option is selected
   */
  isSelected = (option) => {
    const { showKey } = this.props;
    return this.state.OptionList.some(
      (options) => options[showKey] === option[showKey]
    );
  };
  /**
   * returns dropdown list
   */
  render() {
    const { showList, resultList, OptionList } = this.state;
    const { placeholder, data, searchList, showKey } = this.props;
    const list = resultList.length ? resultList : data;
    const selectedoption = OptionList.length
      ? OptionList[0][showKey]
      : placeholder;
    return (
      <>
        <div className={styles["dropdown-div"]}>
          <h2 className={styles["heading"]}>DropDown Menu</h2>
          <div className={styles["dropdown-button"]}>
            <p className={styles["button-heading"]}>{selectedoption}</p>
            <FontAwesomeIcon
              onClick={this.toggle}
              icon={showList ? faAngleUp : faAngleDown}
              className={styles["icon"]}
            />
          </div>
          {showList && (
            <div id="lists" className={`${styles["dropdownlist"]}`}>
              <SearchBox
                data={data}
                result={this.getResult}
                searchkeys={searchList.searchkeys}
                placeholder={placeholder}
                onChange={(res) => {
                  console.log(res);
                }}
                className={styles["searchbar"]}
              />
              {list.map((option, i) => {
                return (
                  <div
                    className={styles["lists"]}
                    key={i}
                    onClick={() => {
                      this.addToList(option);
                    }}
                  >
                    <button
                      className={`${styles["list-button"]} ${
                        this.isSelected(option) ? styles["selected"] : ""
                      }`}
                    >
                      {option[showKey]}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </>
    );
  }
}

DropDown.prototypes = {
  /**
   *  must be array of objects
   */
  data: propTypes.array.isRequired,
  /**
   * must be a string (searchInput)
   */
  showKey: propTypes.string.isRequired,
  /**
   * must be a string
   */
  placeholder: propTypes.string,
  /**
   * must be an object
   */
  searchList: propTypes.object,
  /**
   * must be array of object keys and it is an object of searchList
   */
  searchkeys: propTypes.arrayOf(propTypes.string.isRequired),
};

DropDown.defaultProps = {
  placeholder: "",
};
export default DropDown;
