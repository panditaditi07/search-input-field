import { Component } from "react";
import SearchBox from "./searchBox";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./searchBox.module.scss";
// import searchData from "../data/jsonData";

class SearchBar extends Component {
  render() {
    const icons = this.props.icons;
    return (
      <>
        {(() => {
          switch (icons) {
            case "left":
              return (
                <div className={styles["main-container"]}>
                  <div>
                    <button type="submit" className={styles["search-btn"]}>
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                  <div>
                    {" "}
                    <SearchBox
                      data={this.props.data}
                      placeholder={this.props.placeholder}
                    />
                  </div>
                </div>
              );
            case "right":
              return (
                <div className={styles["main-container"]}>
                  <div>
                    <SearchBox
                      data={this.props.data}
                      placeholder={this.props.placeholder}
                    />
                  </div>
                  <div>
                    <button type="submit" className={styles["search-btn"]}>
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </div>
              );
            default:
              return (
                <div className={styles["main-container"]}>
                  <div>
                    <SearchBox
                      data={this.props.data}
                      placeholder={this.props.placeholder}
                    />
                  </div>
                  <div>
                    <button type="submit" className={styles["search-btn"]}>
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </div>
              );
          }
        })()}
      </>
    );
  }
}
export default SearchBar;
