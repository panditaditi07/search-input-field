import ReactDOM from "react-dom";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faTimesCircle,
  faCheckSquare,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../SearchBox/searchBox";
import styles from "./dropDown.module.scss";
import propTypes from "prop-types";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  state = {
    resultList: [],
    OptionList: [],
    showList: false,
    selectAll: false,
    selectAllOptions: [],
  };

  getResult = (result) => {
    this.setState({ resultList: [...result] });
  };
  handleChange = () => {
    // this.textInput.current.focus();
    document.getElementById("mytext").focus();
    // if (output) {
    //   return false;
    // } else {
    //   return true;
    // }
  };
  removeOption = (option) => {
    const { OptionList, selectAll } = this.state;
    const { showKey, getList } = this.props;
    let result = OptionList.filter((selectedoption) => {
      return selectedoption[showKey] !== option[showKey];
    });

    this.setState({ OptionList: result }, () => {
      getList(this.state.OptionList);
    });

    if (result.length === 0 || result.length - 1) {
      this.setState({ selectAll: false });
    }
    // this.isAllSelected();
  };

  removeSelectedOption = (option) => {
    this.isSelected(option)
      ? this.removeOption(option)
      : this.addToList(option);
  };

  selectAllData = () => {
    const { data } = this.props;
    const { selectAll } = this.state;
    const result = data.map((options) => {
      return options;
    });
    this.setState(
      { OptionList: result, selectAll: !selectAll, selectAllOptions: result },
      () => {
        if (selectAll === true) {
          this.setState({ OptionList: [] });
        } else {
          this.setState({ OptionList: result });
        }
      }
    );
  };

  /**
   *
   * @param {option}
   * stores array of Objects of the selected option
   */
  addToList = (option) => {
    const { OptionList } = this.state;
    const { multipleSelect } = this.props;
    const options = [...OptionList, { ...option }];
    this.setState({ OptionList: options });

    if (!multipleSelect) {
      this.setState({ OptionList: [{ ...option }] });

      const { getList } = this.props;
      getList(option);
      this.toggle();
    }
  };

  hideList = (event) => {
    // console.log(e.currentTarget);
    // console.log(e.target);
    if (
      event.currentTarget.id === "dropdown-div" &&
      !event.currentTarget.contains(event.relatedTarget)
    )
      this.setState({ showList: false });
  };

  /**
   * arrow angle is changed
   */
  toggle = () => {
    this.setState({ showList: !this.state.showList });
  };
  /**
   * @param {option}
   * checks wheather the option is selected
   */
  isSelected = (option) => {
    const { showKey } = this.props;
    return this.state.OptionList.some(
      (options) => options[showKey] === option[showKey]
    );
  };
  isAllSelected = () => {
    // const { selectAll } = this.state;
    // const { showKey } = this.props;

    if (this.state.selectAllOptions.length === this.state.OptionList.length) {
      return true;
    } else if (!this.state.OptionList.length) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * returns dropdown list
   */
  render() {
    console.log(this.isAllSelected());
    const {
      showList,
      resultList,
      OptionList,
      selectAllOptions,
      selectAll,
    } = this.state;
    const {
      placeholder,
      data,
      searchList,
      showKey,
      multipleSelect,
    } = this.props;
    const list = resultList.length ? resultList : data;

    return (
      <>
        <div
          id="dropdown-div"
          onBlur={this.hideList}
          className={styles["dropdown-div"]}
          data-test="DropdownComponent"
        >
          <h2 className={styles["heading"]}>DropDown Menu</h2>
          <div className={styles["dropdown-button"]}>
            <div className={styles["button-heading"]}>
              {OptionList.length ? (
                <div className={styles["selectedOptions"]}>
                  {multipleSelect ? (
                    OptionList.map((optionSelected, i) => {
                      return (
                        <div className={styles["multiSelectOption"]} key={i}>
                          {optionSelected[showKey].length > 10
                            ? optionSelected[showKey].substring(0, 10) + "..."
                            : optionSelected[showKey]}
                          <FontAwesomeIcon
                            onClick={() => {
                              this.removeOption(optionSelected);
                            }}
                            className={styles["removeOption"]}
                            icon={faTimesCircle}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <div>{OptionList[0][showKey]}</div>
                  )}
                </div>
              ) : (
                <>{placeholder}</>
              )}
            </div>
            <FontAwesomeIcon
              onClick={this.toggle}
              data-test="icon"
              icon={showList ? faAngleUp : faAngleDown}
              className={styles["icon"]}
            />
          </div>

          {showList && (
            <div
              id="lists"
              className={`${styles["dropdownlist"]}`}
              onBlur={this.hideList}
            >
              <div id="mytext">
                <SearchBox
                  data={data}
                  result={this.getResult}
                  searchkeys={searchList.searchkeys}
                  placeholder={placeholder}
                  className={styles["searchbar"]}
                />
              </div>
              {this.isAllSelected() && this.handleChange() ? (
                <div
                  className={styles["selectAll"]}
                  onClick={this.selectAllData}
                >
                  {multipleSelect ? (
                    <FontAwesomeIcon
                      className={styles["check-icon"]}
                      color="#3483eb"
                      size="2x"
                      icon={selectAll ? faCheckSquare : faSquare}
                    />
                  ) : (
                    <></>
                  )}
                  <p className={styles["selectAll-heading"]}>Select All</p>
                </div>
              ) : (
                <></>
              )}

              {list.map((option, i) => {
                return (
                  <div
                    className={styles["lists"]}
                    key={i}
                    onClick={() => {
                      this.removeSelectedOption(option);
                    }}
                    data-test="list"
                  >
                    {multipleSelect ? (
                      <FontAwesomeIcon
                        color="#3483eb"
                        size="2x"
                        icon={
                          this.isSelected(option) ? faCheckSquare : faSquare
                        }
                      />
                    ) : (
                      <></>
                    )}
                    <button
                      className={`${styles["list-button"]} ${
                        styles[this.isSelected(option) ? "selected" : ""]
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

DropDown.propTypes = {
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
  /**
   * will give the result
   */
  getList: propTypes.func.isRequired,
};

DropDown.defaultProps = {
  placeholder: "",
};
export default DropDown;

// render() {
//     const { showList, resultList, OptionList } = this.state;
//     const { placeholder, data, searchList, showKey } = this.props;
//     const list = resultList.length ? resultList : data;
//     const selectedoption = OptionList.length
//       ? OptionList[0][showKey]
//       : placeholder;
//     return (
//       <>
//         <div
//           id="dropdown-div"
//           onBlur={this.hideList}
//           className={styles["dropdown-div"]}
//           data-test="DropdownComponent"
//         >
//           <h2 className={styles["heading"]}>DropDown Menu</h2>
//           <div className={styles["dropdown-button"]}>
//             <p className={styles["button-heading"]}>{selectedoption}</p>
//             <FontAwesomeIcon
//               onClick={this.toggle}
//               data-test="icon"
//               icon={showList ? faAngleUp : faAngleDown}
//               className={styles["icon"]}
//             />
//           </div>
//           {showList && (
//             <div id="lists" className={`${styles["dropdownlist"]}`}>
//               <SearchBox
//                 data={data}
//                 result={this.getResult}
//                 searchkeys={searchList.searchkeys}
//                 placeholder={placeholder}
//                 className={styles["searchbar"]}
//               />
//               {list.map((option, i) => {
//                 return (
//                   <div
//                     className={styles["lists"]}
//                     key={i}
//                     onClick={() => {
//                       this.addToList(option);
//                     }}
//                     data-test="list"
//                   >
//                     <button
//                       className={`${styles["list-button"]} ${
//                         styles[this.isSelected(option) ? "selected" : ""]
//                       }`}
//                     >
//                       {option[showKey]}
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </>
//     );
//   }
// }
