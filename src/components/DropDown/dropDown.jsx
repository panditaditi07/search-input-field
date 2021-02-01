import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../SearchBox/searchBox";
import styles from "./dropDown.module.scss";
class DropDown extends Component {
  state = {
    resultList: [],
    OptionList: [],
    selectedOption: "",
    showList: false,
  };
  componentDidUpdate = () => {
    if (this.state.showList) {
      document.getElementById("lists").classList.add(styles["hidden"]);
    } else {
      document.getElementById("lists").classList.remove(styles["hidden"]);
    }
  };

  getResult = (result) => {
    this.setState({ resultList: [...result] });
  };
  addToList = (option) => {
    const { OptionList } = this.state;
    if (OptionList === "undefined") {
      return [];
    } else {
      OptionList.push(option);
    }

    this.props.getList(OptionList);
  };

  toggle = () => {
    this.setState({ showList: !this.state.showList });
  };
  getListData = (option) => {
    this.setState({ selectOption: option });
    // console.log("selected", this.state.selectOption);
  };

  // isSelected = (option) => {
  //   if (this.state.selectOption === option) {
  //     return true;
  //   }
  //   return false;
  // };
  isSelected = (option) => {
    if (this.state.OptionList.includes(option)) {
      return true;
    }
    return false;
  };

  render() {
    // console.log(this.state.resultList);
    const { showList, resultList } = this.state;
    const { placeholder, data, searchList, showKey } = this.props;

    return (
      <div className={styles["container"]}>
        <div className={styles["dropdown-div"]}>
          <div className={styles["dropdown-button"]}>
            <p className={styles["button-heading"]}>{placeholder}</p>
            <FontAwesomeIcon
              onClick={this.toggle}
              icon={showList ? faAngleDown : faAngleUp}
              className={styles["icon"]}
            />
          </div>

          <div
            id="lists"
            className={`${styles["dropdownlist"]} ${styles["hidden"]}`}
          >
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

            {resultList.map((option, i) => {
              return (
                <div
                  className={`${styles["lists"]} ${
                    this.isSelected(option) ? styles["selected"] : ""
                  }`}
                  key={i}
                  onClick={(option) => {
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
        </div>
      </div>
    );
  }
}
export default DropDown;
