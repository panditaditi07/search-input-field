import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../SearchBox/searchBox";
import styles from "./dropDown.module.scss";
class DropDown extends Component {
  constructor(props) {
    super(props);
    this.dropdownInput = React.createRef();
  }
  state = {
    resultList: [],
    isSelected: "",
    showList: false,
    selectOption: "",
  };
  componentDidUpdate = () => {
    if (this.state.showList) {
      document.getElementById("lists").classList.add(styles["hidden"]);
    } else {
      document.getElementById("lists").classList.remove(styles["hidden"]);
    }
  };

  getResult = (result) => {
    console.log(result);
    this.setState({ resultList: [...result] });
  };

  //   componentDidUpdate = () => {
  //     if (this.state.showList) {
  //       this.dropdownInput.current.classList.add(styles["hidden"]);
  //     } else {
  //       this.dropdownInput.current.classList.remove(styles["hidden"]);
  //     }
  //   };
  toggle = () => {
    this.setState({ showList: !this.state.showList });
  };

  render() {
    console.log(this.state.resultList);
    const { showList, resultList } = this.state;
    const { placeholder, data, searchList } = this.props;
    return (
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
          ref={this.dropdownInput}
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
          {resultList.map((list, index) => {
            return <button> {list.name}</button>;
          })}
        </div>
      </div>
    );
  }
}
export default DropDown;
