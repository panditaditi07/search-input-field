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
    const { showList } = this.state;
    const { placeholder, data } = this.props;
    return (
      <div className={styles["dropdown-div"]}>
        <div className={styles["dropdown-button"]}>
          <p className={styles["button-heading"]}>{placeholder}</p>
          <FontAwesomeIcon
            onClick={this.toggle}
            icon={showList ? faAngleUp : faAngleDown}
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
            placeholder={placeholder}
            className={styles["searchbar"]}
          />
        </div>
      </div>
    );
  }
}
export default DropDown;
